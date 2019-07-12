import { extendConfig } from '../../index';

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
	notes: [
		{ id: 'textualNotes' },
		{ id: 'editorNotes' },
	],
	pages: [],
	textdata: [
		{
			color: '#fd7a7a',
			id: 'person',
			aside: true,
			extractor: {
				selector: 'div[type="translation"] rs[type="pers"]',
				highlightType: TextDataHighlightType.textcontent,
				idAttribute: 'key'
			},
			textLayers: ['translation'],
		}
	],
	textlayers: [
		{
			active: true,
			id: 'facsimile',
			type: TextLayerType.Facsimile,
		},
		{
			active: false,
			id: 'original',
			type: TextLayerType.TextLayer,
			selector: 'div[type="original"]',
		},
		{
			active: false,
			id: 'original-tei',
			title: 'Original TEI',
			type: TextLayerType.XML,
			selector: 'div[type="original"]',
		},
		{
			active: true,
			id: 'translation',
			type: TextLayerType.TextLayer,
			selector: 'div[type="translation"]',
		},
		{
			active: false,
			id: 'translation-tei',
			title: 'Translation TEI',
			type: TextLayerType.XML,
			selector: 'div[type="translation"]',
		},
		{
			active: false,
			id: 'tei',
			title: 'Full TEI',
			type: TextLayerType.XML,
		},
	]
}

export default extendConfig(config)
