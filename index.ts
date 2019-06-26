/// <reference path="./types.d.ts" />

import extractTextData from './textdata'

const defaultConfig: DocereConfig = {
	metadata: [],
	notes: [],
	searchResultCount: 20,
	slug: 'unknown-project',
	title: 'Unknown project',
	textdata: [],
	textlayers: [
		{
			active: true,
			id: 'facsimile',
			title: 'Facsimile',
			type: TextLayerType.Facsimile
		},
		{
			active: true,
			id: 'transcription',
			title: 'Transcription',
			type: TextLayerType.TextLayer
		}
	]
}

export const defaultMetadata: MetaDataConfig = {
	aside: true,
	datatype: EsDataType.keyword,
	id: null,
	order: 9999,
}

function setTitle<T extends EntityConfig>(entityConfig: T) {
	if (entityConfig.title == null) {
		entityConfig.title = entityConfig.id.charAt(0).toUpperCase() + entityConfig.id.slice(1)
	}
	return entityConfig
}

function setPath(page: PageConfig) {
	if (page.path == null) page.path = `${page.id}.xml`
	return page
}

export function extendConfig(config: DocereConfig): DocereConfig {
	config = {...defaultConfig, ...config}
	config.metadata = config.metadata.map(md => setTitle({...defaultMetadata, ...md}))
	config.textlayers = config.textlayers.map(setTitle)
	config.textdata = config.textdata.map(td => {
		if (!Array.isArray(td.textLayers)) {
			td.textLayers = config.textlayers.map(tl => tl.id)
		}
		return setTitle(td)
	})
	config.notes = config.notes.map(setTitle)
	config.pages = config.pages.map(page => {
		if (Array.isArray(page.children)) {
			page.children = page.children.map(p => setTitle(setPath(p)))
		}
		return setTitle(setPath(page))
	})
	return config
}

const defaultDocereFunctions: Pick<DocereConfigData, 'prepareDocument' | 'extractFacsimiles' | 'extractMetadata' | 'extractNotes' | 'extractTextData'> = {
	prepareDocument: function prepareDocument(doc) { return doc },
	extractFacsimiles: function extractFacsimiles(_doc) { return [] },
	extractMetadata: function extractMetadata(_doc) { return {} },
	extractNotes: function extractNotes(_doc) { return {} },
	extractTextData, 
}

export default defaultDocereFunctions
