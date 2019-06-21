interface DocereConfigData {
	config: DocereConfig
	extractFacsimiles?: (doc: XMLDocument) => ExtractedFacsimile[]
	extractMetadata?: (doc: XMLDocument) => ExtractedMetadata
	extractTextData?: (doc: XMLDocument, config: DocereConfig) => ExtractedTextData
	prepareDocument?: (doc: XMLDocument, config: DocereConfig, id?: string) => XMLDocument
}

type ExtractedMetadata = Record<string, boolean | string | string[]>
type ExtractedTextData = Record<string, TextDataValue[]>

interface ExtractedFacsimile {
	id: string
	path: string
}

declare const enum TextLayerType { Facsimile, TextLayer }

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

interface MetaDataConfig {
	aside?: boolean
	datatype?: EsDataType
	id: string
	order?: number
	title?: string
}

interface TextDataExtractor {
	selector: string
	highlightType: TextDataHighlightType
	idAttribute: string
}

interface TextDataConfig extends MetaDataConfig {
	color: string
	extractor: TextDataExtractor
}

interface Page {
	id: string
	path?: string
	title: string
	children?: Page[]
}

interface TextLayerConfig {
	id: string
	title: string
	type: TextLayerType
	selector?: string
}

interface DocereConfig {
	metadata?: MetaDataConfig[]
	pages?: Page[]
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
