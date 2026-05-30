# SEO Content Creation Workflow

This is the primary workflow for creating, publishing, and continuously improving SEO-optimized content for Aibishter Engineering Services. The workflow is divided into three phases: **Plan & Research**, **Create & Publish**, and **Measure & Iterate**.

## Phase 1: Plan & Research

### 1. Get Prioritized Action Plan
```
/seo-project-manager
```
Reads all SEO memory files and returns a prioritized list of work:
- **By impact**: Topics with highest search volume and conversion potential
- **By difficulty**: Ranked by keyword difficulty (easier wins first)
- **By type**: New content, gap fill, or refresh

Includes recommendation for which agent to run next and on what target.

### 2. Content Gap Analysis (if needed)
Run this periodically (monthly) to identify competitor topics you're missing:
```
/competitor-researcher <domain1> <domain2> <domain3>
```
Example: `/competitor-researcher solarpanel.com.ph sunpower.ph altec-energysolutions.com`

Outputs to `memory/seo/competitors.md`:
- Keywords competitors rank for that you don't
- Ranking difficulty for each gap
- Traffic potential
- Priority for new content creation

### 3. Research Keywords (for new topics)
```
/keyword-researcher <topic>
```
Example: `/keyword-researcher residential solar installation cost`

Generates keyword clusters with:
- Search volume (monthly searches)
- Keyword difficulty (competition level)
- CPC value
- Related keywords and questions

Writes to `memory/seo/keywords.md`. **Skip if keywords already exist** for your topic.

---

## Phase 2: Create & Publish

### 4. Write Content
```
/seo-writer <keyword-cluster-name or page-slug>
```
Examples:
- `/seo-writer residential` (uses keyword cluster from memory)
- `/seo-writer blog/solar-panel-cost-philippines` (generates for specific page)

Outputs to `memory/seo/draft.md`. The draft includes:
- SEO-optimized copy targeting keyword cluster
- Meta title & description
- Header structure (H1, H2, H3)
- Internal link recommendations

### 5. QA Check
```
/qa
```
Runs full SEO checklist. Logs result to `memory/seo/qa-log.md`.

**If PASS:** proceed to step 6 (publish)

**If FAIL:** 
1. Read the QA log to see which checks failed
2. Fix the draft in `memory/seo/draft.md` (e.g., improve keyword density, rewrite headers, fix readability)
3. Re-run `/qa` 
4. Repeat until PASS

Do NOT publish with failing checks.

### 6. Publish to CMS
```
/content-updater
```
(Only after `/qa PASS`)

Publishes approved content to Sanity CMS. Logs result to `memory/seo/content-log.md`.

---

## Phase 3: Measure & Iterate

### 7. Track Rankings (weekly or monthly)
```
/seo-project-manager
```
After content is live (2-4 weeks), run the project manager again to generate a ranking report. This:
- Pulls current rankings for published keywords
- Updates `memory/seo/rankings.md` with position changes
- Identifies underperforming pages (keywords not ranking in top 10)

### 8. Refresh Underperforming Content
For pages ranking #11-50 (close but not there yet):
1. Note the keyword and current position in `memory/seo/rankings.md`
2. Run `/seo-writer <page-slug>` with instruction to improve for specific keyword
3. Run `/qa` and `/content-updater` again

Prioritize keywords with:
- High search volume (>50 monthly searches)
- Low difficulty (easier to move up)
- Recent publish date (you have momentum)

## Memory Files & State Management

All workflow data is stored in `memory/seo/`:

| File | Purpose | Updated By |
|------|---------|-----------|
| `keywords.md` | Researched keyword clusters with search volume, difficulty, CPC | /keyword-researcher |
| `competitors.md` | Competitor rankings, keyword gaps, priority for content | /competitor-researcher |
| `draft.md` | Current content draft before publishing | /seo-writer |
| `qa-log.md` | QA pass/fail results and checklist failures | /qa |
| `content-log.md` | Publishing history with dates and page URLs | /content-updater |
| `rankings.md` | Aibishter's keyword positions tracked over time (weekly/monthly snapshots) | /seo-project-manager |

## Typical Workflow Rhythm

- **Week 1-2**: Gap analysis → Keyword research → Write content → QA → Publish
- **Week 3-4**: Monitor for ranking changes (rankings.md updates)
- **Month 2+**: Identify underperformers → Refresh content → Repeat

## When to Use Each Agent

| Agent | When | Input | Output |
|-------|------|-------|--------|
| `/seo-project-manager` | Start of sprint, monthly review, after publishing | None | Prioritized action list |
| `/competitor-researcher` | Monthly content audit, identify gaps | Competitor domains | Gap analysis + priorities |
| `/keyword-researcher` | Starting new content topic | Topic name | Keyword clusters |
| `/seo-writer` | Creating or refreshing content | Keyword cluster or page slug | Draft in memory/seo/draft.md |
| `/qa` | After writing, before publishing | Draft in memory (from /seo-writer) | PASS/FAIL + checklist |
| `/content-updater` | Only after /qa PASS | Draft in memory | Published to Sanity CMS |

---

<!-- BEGIN:nextjs-agent-rules -->
# Technical Notes: Next.js Breaking Changes

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
