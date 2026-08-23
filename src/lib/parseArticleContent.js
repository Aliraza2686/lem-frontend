/**
 * Parses an article's raw HTML content into:
 *  - toc: [{ id, text, level }] for h2/h3 headings, with stable, deduped anchor ids
 *  - blocks: top-level content chunks in document order, each tagged with the
 *    heading id it belongs to, so a single IntersectionObserver can drive both
 *    TOC active/visited state and body read/unread treatment.
 *
 * Content is authored only by admin/editor roles (see backend auth), so this
 * intentionally renders the HTML as-is rather than sanitizing untrusted input.
 *
 * @param {string} html
 * @returns {{ toc: Array<{id:string,text:string,level:2|3}>, blocks: Array<{id:string,headingId:string,isHeading:boolean,level?:2|3,html:string}> }}
 */
export function parseArticleContent(html) {
  if (!html) return { toc: [], blocks: [] };

  const doc = new DOMParser().parseFromString(html, "text/html");
  const usedIds = new Set();

  const slugify = (text) => {
    const base =
      text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-") || "section";
    let id = base;
    let i = 1;
    while (usedIds.has(id)) {
      id = `${base}-${i}`;
      i += 1;
    }
    usedIds.add(id);
    return id;
  };

  const toc = [];
  const blocks = [];
  let currentHeadingId = "intro";
  let blockIndex = 0;

  Array.from(doc.body.children).forEach((el) => {
    const tag = el.tagName.toLowerCase();

    if (tag === "h2" || tag === "h3") {
      const text = el.textContent.trim();
      const id = slugify(text);
      el.setAttribute("id", id);
      currentHeadingId = id;

      const level = tag === "h2" ? 2 : 3;
      toc.push({ id, text, level });
      blocks.push({ id, headingId: id, isHeading: true, level, html: el.outerHTML });
    } else {
      const id = `block-${blockIndex}`;
      blockIndex += 1;
      blocks.push({ id, headingId: currentHeadingId, isHeading: false, html: el.outerHTML });
    }
  });

  return { toc, blocks };
}
