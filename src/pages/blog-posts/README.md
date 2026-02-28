# Blog Posts Directory

This directory contains individual blog post components.

## How to Add a New Blog Post

### Option 1: HTML File (Recommended for rich content)
1. Create an HTML file in `frontend/public/blog/your-slug.html`
2. Follow the design template from `personal-website-lethal-2026.html` or `ai-powered-business-2026.html`
3. Add the post data to `frontend/src/constants/data.js`
4. Update `PostDetailPage.js` to include your slug in the HTML posts check

### Option 2: JSX Component
1. Copy `BlogPostTemplate.js` and rename it to match your slug
2. Fill in your content
3. Import it in `PostDetailPage.js`
4. Add routing logic for your post

## Design System

### Colors
- `--ink`: #0a0a0a (dark background)
- `--paper`: #f5f0e8 (light background)
- `--acid`: #c8ff00 (accent yellow)
- `--rust`: #d4380d (accent red)
- `--slate`: #2a2f3a (dark text)
- `--muted`: #6b6b6b (muted text)

### Fonts
- **Syne** (800 weight) - Headlines
- **DM Mono** - Body text, labels
- **Instrument Serif** (italic) - Quotes, lead paragraphs

### Components
- Section labels: Small caps, rust color
- Cards: Grid layout with hover effects
- Stats: Large numbers with small labels
- Callouts: Dark background with quotes
- Highlight boxes: Left border, light background

## Current Blog Posts

1. ✅ personal-website-lethal-2026 (HTML)
2. ✅ ai-powered-business-2026 (HTML)
3. ⏳ death-of-seo-geo-2026
4. ⏳ 200k-tech-job-2026
5. ⏳ agentic-ai-era
... (17 more to create)
