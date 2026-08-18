#!/usr/bin/env node
/**
 * Scrapes Operations blog posts from decisionengines.ai WordPress API
 * and writes Astro content collection markdown files.
 *
 * Usage: node scripts/scrape-blog.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import TurndownService from "turndown";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "src/content/blog");
const IMAGE_DIR = path.join(ROOT, "public/images/blog");
const API_BASE = "https://decisionengines.ai/wp-json/wp/v2";
const CATEGORY_OPERATIONS = 36;

/** Keep short slugs for posts already linked on the site */
const SLUG_OVERRIDES = {
  "what-is-process-automation-how-does-it-work": "what-is-process-automation",
  "ai-is-changing-ap-fraud-are-you-ready": "ai-changing-ap-fraud",
  "drc-releases-are-rolling-out-in-regional-waves-is-your-ap-system-ready":
    "drc-releases-ap-system-ready",
  "advanced-line-item-extraction-the-missing-piece-in-touchless-ap-automation":
    "beyond-header-data-line-item-extraction",
};

const WP_REDIRECTS = {
  "what-is-process-automation-how-does-it-work": "what-is-process-automation",
  "ai-is-changing-ap-fraud-are-you-ready": "ai-changing-ap-fraud",
  "drc-releases-are-rolling-out-in-regional-waves-is-your-ap-system-ready":
    "drc-releases-ap-system-ready",
  "beyond-header-data-why-advanced-line-item-extraction-is-the-future-of-ap-automation":
    "beyond-header-data-line-item-extraction",
  "advanced-line-item-extraction-the-missing-piece-in-touchless-ap-automation":
    "beyond-header-data-line-item-extraction",
};

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  emDelimiter: "*",
});

turndown.addRule("removeEmptyParagraphs", {
  filter: (node) =>
    node.nodeName === "P" && !(node.textContent || "").trim() && !node.querySelector("img"),
  replacement: () => "",
});

turndown.keep(["iframe"]);

function preprocessHtml(html) {
  let out = html;

  // Drop lazy-load GIF placeholders when a real data-src exists
  out = out.replace(
    /<img[^>]*\ssrc="data:image[^"]*"[^>]*data-src="([^"]+)"[^>]*>/gi,
    (_, src) => `<img src="${src}" alt="" />`
  );
  // Remove leftover placeholder images
  out = out.replace(/<img[^>]*\ssrc="data:image[^"]*"[^>]*>/gi, "");

  // Resolve lazy-loaded images from noscript fallbacks
  out = out.replace(
    /<noscript>\s*<img[^>]+src="([^"]+)"[^>]*>\s*<\/noscript>/gi,
    (_, src) => `<img src="${src}" alt="" />`
  );

  // Promote data-src to src for any remaining lazy images
  out = out.replace(
    /<img([^>]*?)data-src="([^"]+)"([^>]*?)>/gi,
    (_, before, src, after) => {
      const attrs = `${before}${after}`.replace(/\s*data-src="[^"]*"/gi, "");
      return `<img${attrs} src="${src}">`;
    }
  );

  return out;
}

function decodeHtml(text) {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&hellip;/g, "…")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function yamlEscape(value) {
  return `"${String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function localSlug(wpSlug) {
  return SLUG_OVERRIDES[wpSlug] || wpSlug;
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "DecisionEnginesSiteMigration/1.0" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function fetchAllOperationsPosts() {
  const posts = [];
  let page = 1;
  while (true) {
    const batch = await fetchJson(
      `${API_BASE}/posts?categories=${CATEGORY_OPERATIONS}&per_page=100&page=${page}&orderby=date&order=desc&_embed=wp:featuredmedia,wp:term`
    );
    if (!Array.isArray(batch) || batch.length === 0) break;
    posts.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }
  return posts;
}

async function downloadImage(url, destPath) {
  const normalized = url.replace(/^http:\/\//i, "https://");
  const res = await fetch(normalized, {
    headers: { "User-Agent": "DecisionEnginesSiteMigration/1.0" },
  });
  if (!res.ok) throw new Error(`Image download failed ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(destPath, buf);
}

function getFeaturedImageUrl(post) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  return media?.source_url || media?.media_details?.sizes?.large?.source_url || null;
}

function getCategory(post) {
  const terms = post._embedded?.["wp:term"]?.[0] || [];
  const cat = terms.find((t) => t.taxonomy === "category");
  return cat?.name || "Operations";
}

function getTags(post) {
  const terms = post._embedded?.["wp:term"]?.[1] || [];
  return terms.map((t) => decodeHtml(t.name)).filter(Boolean);
}

function rewriteLinks(markdown, slug) {
  let out = markdown;

  const linkMap = [
    [/https?:\/\/decisionengines\.ai\/demo\/?/gi, "/company/contact"],
    [/https?:\/\/decisionengines\.ai\/contact\/?/gi, "/company/contact"],
    [/https?:\/\/decisionengines\.ai\/invoice-automation\/?/gi, "/product/invoiceiq"],
    [/https?:\/\/decisionengines\.ai\/invoiceiq\/?/gi, "/product/invoiceiq"],
    [/https?:\/\/decisionengines\.ai\/contract-automation\/?/gi, "/product/contractiq"],
    [/https?:\/\/decisionengines\.ai\/converseiq-assistant\/?/gi, "/product/converseiq"],
    [/https?:\/\/decisionengines\.ai\/decisioniq-automation\/?/gi, "/product/decisioniq"],
    [/https?:\/\/decisionengines\.ai\/connectors\/?/gi, "/product/connectors"],
    [/https?:\/\/decisionengines\.ai\/business-process-automation\/?/gi, "/product/decisioniq"],
  ];

  for (const [pattern, replacement] of linkMap) {
    out = out.replace(pattern, replacement);
  }

  // Rewrite blog post links only — never touch wp-content asset URLs
  out = out.replace(
    /https?:\/\/decisionengines\.ai\/(?!wp-content\/)([a-z0-9-]+)\/?/gi,
    (_, wpSlug) => `/blog/${localSlug(wpSlug)}`
  );

  out = out.replace(/!\[([^\]]*)\]\(data:image[^)]+\)/g, "");
  out = out.replace(/\n{3,}/g, "\n\n").trim();

  return out;
}

function normalizeMarkdownImages(markdown) {
  // Split glued markdown images onto separate lines
  let out = markdown.replace(/\)\!\[/g, ")\n\n![");
  // Drop duplicate external image right after a local copy
  out = out.replace(
    /!\[([^\]]*)\]\((\/images\/blog\/[^)]+)\)\s*\n?\s*!\[[^\]]*\]\((?:https?:\/\/decisionengines\.ai)?\/wp-content\/[^)]+\)/gi,
    "![$1]($2)"
  );
  out = out.replace(/!\[[^\]]*\]\(\s*\)/g, "");
  return out;
}

async function processImagesInMarkdown(markdown, slug) {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let result = markdown;
  const urlToLocal = new Map();
  let imageIndex = 0;

  const matches = [...markdown.matchAll(imageRegex)];
  for (const match of matches) {
    const [full, alt, rawUrl] = match;
    if (!rawUrl || rawUrl.startsWith("/images/") || rawUrl.startsWith("data:")) continue;

    const url = rawUrl.replace(/^http:\/\//i, "https://");
    if (urlToLocal.has(url)) {
      result = result.replace(full, `![${alt}](${urlToLocal.get(url)})`);
      continue;
    }

    try {
      imageIndex += 1;
      const ext = path.extname(new URL(url).pathname) || ".jpg";
      const safeExt = [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext.toLowerCase())
        ? ext.toLowerCase()
        : ".jpg";
      const filename = `${slug}-img-${imageIndex}${safeExt}`;
      const dest = path.join(IMAGE_DIR, filename);
      await downloadImage(url, dest);
      const localPath = `/images/blog/${filename}`;
      urlToLocal.set(url, localPath);
      result = result.replace(full, `![${alt}](${localPath})`);
    } catch (err) {
      console.warn(`  Skipped image ${url}: ${err.message}`);
      result = result.replace(full, alt ? `\n\n*${alt}*\n\n` : "");
    }
  }

  return result;
}

async function writePost(post) {
  const wpSlug = post.slug;
  const slug = localSlug(wpSlug);
  const title = decodeHtml(post.title.rendered);
  const description = decodeHtml(post.excerpt.rendered)
    .replace(/\[\s*\.\.\.\s*\]/g, "")
    .replace(/\.\.\.$/, "")
    .trim();
  const pubDate = post.date.slice(0, 10);
  const category = getCategory(post);
  const tags = getTags(post);

  let imagePath = "";
  const featuredUrl = getFeaturedImageUrl(post);
  if (featuredUrl) {
    const ext = path.extname(new URL(featuredUrl).pathname) || ".jpg";
    const safeExt = [".jpg", ".jpeg", ".png", ".webp"].includes(ext.toLowerCase()) ? ext.toLowerCase() : ".jpg";
    const imageFile = `${slug}${safeExt}`;
    try {
      await downloadImage(featuredUrl, path.join(IMAGE_DIR, imageFile));
      imagePath = `/images/blog/${imageFile}`;
    } catch (err) {
      console.warn(`  Featured image failed for ${slug}: ${err.message}`);
    }
  }

  let body = turndown.turndown(preprocessHtml(post.content.rendered));
  body = normalizeMarkdownImages(body);
  body = await processImagesInMarkdown(body, slug);
  body = normalizeMarkdownImages(body);
  body = rewriteLinks(body, slug);

  const frontmatter = [
    "---",
    `title: ${yamlEscape(title)}`,
    `description: ${yamlEscape(description)}`,
    `pubDate: ${pubDate}`,
    `category: ${yamlEscape(category)}`,
    `tags: [${tags.map((t) => yamlEscape(t)).join(", ")}]`,
    imagePath ? `image: ${imagePath}` : null,
    "---",
  ]
    .filter((line) => line !== null)
    .join("\n");

  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  await fs.writeFile(filePath, `${frontmatter}\n\n${body}\n`, "utf8");
  return { slug, wpSlug, title };
}

async function updateRedirects(written) {
  const redirectsPath = path.join(ROOT, "public/_redirects");
  let content = await fs.readFile(redirectsPath, "utf8");
  const lines = content
    .split("\n")
    .filter((line) => line.trim() && !line.startsWith("#"));

  const existingFrom = new Set(lines.map((l) => l.split(/\s+/)[0]));

  for (const { slug, wpSlug } of written) {
    if (wpSlug !== slug && !existingFrom.has(`/${wpSlug}`)) {
      lines.push(`/${wpSlug} /blog/${slug} 301`);
      existingFrom.add(`/${wpSlug}`);
    }
    for (const [oldPath, targetSlug] of Object.entries(WP_REDIRECTS)) {
      if (targetSlug === slug && !existingFrom.has(`/${oldPath}`)) {
        lines.push(`/${oldPath} /blog/${slug} 301`);
        existingFrom.add(`/${oldPath}`);
      }
    }
  }

  // Sort blog redirects together at end
  const nonBlog = lines.filter((l) => !l.includes(" /blog/"));
  const blog = [...new Set(lines.filter((l) => l.includes(" /blog/")))].sort();
  await fs.writeFile(redirectsPath, [...nonBlog, ...blog].join("\n") + "\n", "utf8");
}

async function main() {
  await fs.mkdir(BLOG_DIR, { recursive: true });
  await fs.mkdir(IMAGE_DIR, { recursive: true });

  console.log("Fetching Operations posts from WordPress API...");
  const posts = await fetchAllOperationsPosts();
  console.log(`Found ${posts.length} posts`);

  // Clear old markdown files first
  const existing = await fs.readdir(BLOG_DIR);
  for (const file of existing) {
    if (file.endsWith(".md")) await fs.unlink(path.join(BLOG_DIR, file));
  }

  const written = [];
  for (const post of posts) {
    try {
      const result = await writePost(post);
      written.push(result);
      console.log(`  ✓ ${result.slug}`);
    } catch (err) {
      console.error(`  ✗ ${post.slug}: ${err.message}`);
    }
  }

  await updateRedirects(written);
  console.log(`\nWrote ${written.length} blog posts to src/content/blog/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
