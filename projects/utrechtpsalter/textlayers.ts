const extractTextLayers: DocereConfigData['extractTextLayers'] = function extractTextLayers(doc) {
	return Array.from(doc.querySelectorAll('transcription'))
		.reduce((prev, curr) => {
			prev[curr.querySelector('lang').textContent] = curr
			return prev
		}, {} as ExtractedTextLayers)
}
export default extractTextLayers
