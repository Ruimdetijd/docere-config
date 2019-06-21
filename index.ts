/// <reference path="./types.d.ts" />

import extractTextData from './textdata'

export const defaultMetadata: MetaDataConfig = {
	aside: true,
	datatype: EsDataType.keyword,
	id: null,
	order: 9999,
}

const docereConfigData: DocereConfigData = {
	config: {
		searchResultCount: 20,
		slug: 'unknown-project',
		title: 'Unknown project',
		textlayers: [
			{
				id: 'facsimile',
				title: 'Facsimile',
				type: TextLayerType.Facsimile
			},
			{
				id: 'transcription',
				title: 'Transcription',
				type: TextLayerType.TextLayer
			}
		]
	},
	prepareDocument: function prepareDocument(doc) { return doc },
	extractFacsimiles: function extractFacsimiles(_doc) { return [] },
	extractMetadata: function extractMetadata(_doc) { return {} },
	extractTextData, 
}

export default docereConfigData
