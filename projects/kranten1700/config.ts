import { extendConfig } from '../../index'

const config: DocereConfig = {
	slug: 'kranten1700',
	title: 'Kranten 1700',
	metadata: [
		{
			datatype: EsDataType.date,
			id: 'date',
			order: 0,
		},
		{
			id: 'pos',
			size: 12,
			title: 'PoS tagging',
		}
	],
	notes: [],
	pages: [],
	textdata: [
		{
			color: '#fd7a7a',
			id: 'pos',
			extractor: {
				selector: 'w',
				extractionType: TextDataExtractionType.Attribute,
				idAttribute: 'pos'
			},
			title: 'Part-of-speech tagging'
		},
		{
			color: '#5fb53f',
			id: 'org',
			extractor: {
				selector: 'rs[type="org"]',
				extractionType: TextDataExtractionType.TextContent,
				idAttribute: 'xml:id'
			},
		},
		{
			color: 'orange',
			id: 'per',
			extractor: {
				selector: 'rs[type="per"]',
				extractionType: TextDataExtractionType.TextContent,
				idAttribute: 'xml:id'
			},
		},
		{
			color: '#8080ff',
			id: 'loc',
			extractor: {
				selector: 'rs[type="loc"]',
				extractionType: TextDataExtractionType.TextContent,
				idAttribute: 'xml:id'
			},
		},
		{
			color: 'lightblue',
			id: 'misc',
			extractor: {
				selector: 'rs[type="misc"]',
				extractionType: TextDataExtractionType.TextContent,
				idAttribute: 'xml:id'
			},
		},
	],
	textlayers: [
		{
			active: true,
			id: 'Origineel',
			type: TextLayerType.TextLayer,
			selector: 'text',
		},
		{
			active: true,
			id: 'Contemporain',
			type: TextLayerType.TextLayer,
			selector: 'text',
		},
		{
			active: false,
			id: 'tei',
			title: 'TEI',
			type: TextLayerType.XML,
		},
	]
}

export default extendConfig(config)
