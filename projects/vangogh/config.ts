const config: DocereConfig = {
	slug: 'vangogh',
	title: 'Van Gogh Letters',
	metadata: [
		{
			id: 'author',
		},
		{
			id: 'addressee',
		},
		{
			id: 'placelet',
		},
		{
			id: 'letcontents',
			datatype: EsDataType.text,
		},
	],
	pages: [],
	textdata: [
		{
			color: '#fd7a7a',
			id: 'person',
			aside: true,
			extractor: {
				selector: 'rs[type="pers"]',
				highlightType: TextDataHighlightType.textcontent,
				idAttribute: 'key'
			},
			title: 'Person'
		}
	],
	textlayers: [
		{
			id: 'facsimile',
			title: 'Facsimile',
			type: TextLayerType.Facsimile,
		},
		{
			id: 'original',
			title: 'Original',
			type: TextLayerType.TextLayer,
			selector: 'div[type="original"]',
		},
		{
			id: 'translation',
			title: 'Translation',
			type: TextLayerType.TextLayer,
			selector: 'div[type="translation"]',
		}
	]
}

export default config
