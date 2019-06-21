import extractTextData from './textdata';
export const defaultMetadata = {
    aside: true,
    datatype: "keyword",
    id: null,
    order: 9999,
};
const docereConfigData = {
    config: {
        searchResultCount: 20,
        slug: 'unknown-project',
        title: 'Unknown project',
        textlayers: [
            {
                id: 'facsimile',
                title: 'Facsimile',
                type: 0
            },
            {
                id: 'transcription',
                title: 'Transcription',
                type: 1
            }
        ]
    },
    prepareDocument: function prepareDocument(doc) { return doc; },
    extractFacsimiles: function extractFacsimiles(_doc) { return []; },
    extractMetadata: function extractMetadata(_doc) { return {}; },
    extractTextData,
};
export default docereConfigData;
