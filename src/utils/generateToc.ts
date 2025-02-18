import type { MarkdownHeading } from 'astro'

export interface TocItem extends MarkdownHeading {
	subheadings: Array<TocItem>
}

function diveChildren(item: TocItem, depth: number): Array<TocItem> {
	if (depth === 1 || !item.subheadings.length) {
		return item.subheadings
	} else {
		// e.g., 2
		return diveChildren(item.subheadings[item.subheadings.length - 1] as TocItem, depth - 1)
	}
}

export function generateToc(headings: ReadonlyArray<MarkdownHeading>) {
	if (!headings || headings.length === 0) return [] // Hindari error jika headings kosong

	// Filter hanya heading yang memiliki properti depth
	const bodyHeadings = headings.filter((h) => h?.depth && h.depth > 1)

	const toc: Array<TocItem> = []

	bodyHeadings.forEach((h) => {
		if (!h || !h.depth) return // Pastikan objek h valid

		const heading: TocItem = { ...h, subheadings: [] }

		if (heading.depth === 2) { 
			toc.push(heading)
		} else {
			const lastItemInToc = toc[toc.length - 1]
			if (!lastItemInToc) {
				console.warn(`Orphan heading found: ${heading.text}. Skipping.`)
				return
			}

			if (heading.depth < lastItemInToc.depth) {
				throw new Error(`Orphan heading found: ${heading.text}.`)
			}

			const gap = heading.depth - lastItemInToc.depth
			const target = diveChildren(lastItemInToc, gap)
			target.push(heading)
		}
	})

	return toc
}
