export default function extractTextData(doc: XMLDocument, config: DocereConfig): ExtractedTextData {
	if (!config.textdata) return {}
	return config.textdata.reduce((prev: ExtractedTextData, curr) => {
		const items: Record<string, TextDataValue> = {}
		prev[curr.id] = Array.from(doc.querySelectorAll(curr.extractor.selector))
			.reduce((prev, currEl) => {
				const key = currEl.textContent
				if (items.hasOwnProperty(key)) {
					items[key].count = items[key].count + 1
				}
				else {
					items[key] = { key, value: currEl.textContent, count: 1 }
					prev.push(items[key])
				}
				return prev
			}, []) 
		return prev
	}, {})
}
