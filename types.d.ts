interface DocereConfigData {
	config: DocereConfig
	extractFacsimiles?: (doc: XMLDocument) => ExtractedFacsimile[]
	extractMetadata?: (doc: XMLDocument) => ExtractedMetadata
	extractNotes?: (doc: XMLDocument) => ExtractedNotes
	extractTextData?: (doc: XMLDocument, config: DocereConfig) => ExtractedTextData
	prepareDocument?: (doc: XMLDocument, config: DocereConfig, id?: string) => XMLDocument
}

interface ExtractedNote {
	n: string | number
	el: Element
}
type ExtractedNotes = Record<string, ExtractedNote[]>

type ExtractedMetadata = Record<string, boolean | string | string[]>
type ExtractedTextData = Record<string, TextDataValue[]>

interface ExtractedFacsimile {
	id: string
	path: string[]
}

declare const enum TextLayerType { Facsimile, TextLayer, XML }

// TODO items in enum should be capitalized
declare const enum EsDataType {
	boolean = "boolean",
	date = "date",
	geo_point = "geo_point",
	integer = "integer",
	keyword = "keyword",
	null = "null",
	text = "text",
}

declare const enum TextDataHighlightType {
	textcontent = "textcontent",
	milestone = "milestone",
}

interface MetaDataConfig extends EntityConfig {
	aside?: boolean
	datatype?: EsDataType
	order?: number
}

interface TextDataExtractor {
	selector: string
	highlightType: TextDataHighlightType
	idAttribute: string
}

interface TextDataConfig extends MetaDataConfig {
	color: string
	extractor: TextDataExtractor
	textLayers?: string[]
}

interface EntityConfig {
	id: string
	title?: string
}

interface PageConfig extends EntityConfig {
	path?: string
	children?: PageConfig[]
}

interface TextLayerConfig extends EntityConfig {
	active: boolean
	type: TextLayerType
	selector?: string
}

interface NotesConfig extends EntityConfig {

}

interface DocereConfig {
	metadata?: MetaDataConfig[]
	notes?: NotesConfig[]
	pages?: PageConfig[]
	searchResultCount?: number
	slug: string
	textdata?: TextDataConfig[]
	textlayers?: TextLayerConfig[]
	title: string
}

interface TextDataValue {
	count: number
	key: string
	value: string
}
