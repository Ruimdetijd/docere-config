const extractFacsimiles: DocereConfigData['extractFacsimiles'] = function extractFacsimiles(doc) {
	return Array.from(doc.querySelectorAll('pb'))
		.map(graphic => {
			const fileName = graphic.getAttribute('facs')
			if (fileName == null) return null
			const path = `http://localhost:5004/ode/${fileName.toLowerCase()}/info.json`
			// return path
			return { id: path, path: [path] }
		})
		.filter(ef => ef != null)
}
export default extractFacsimiles
