import { extendConfig } from '../../index';
const config = {
    slug: 'kranten1700',
    title: 'Kranten 1700',
    metadata: [
        {
            datatype: "date",
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
                extractionType: "attribute",
                idAttribute: 'pos'
            },
            title: 'Part-of-speech tagging'
        },
        {
            color: '#5fb53f',
            id: 'org',
            extractor: {
                selector: 'rs[type="org"]',
                extractionType: "textcontent",
                idAttribute: 'xml:id'
            },
        },
        {
            color: 'orange',
            id: 'per',
            extractor: {
                selector: 'rs[type="per"]',
                extractionType: "textcontent",
                idAttribute: 'xml:id'
            },
        },
        {
            color: '#8080ff',
            id: 'loc',
            extractor: {
                selector: 'rs[type="loc"]',
                extractionType: "textcontent",
                idAttribute: 'xml:id'
            },
        },
        {
            color: 'lightblue',
            id: 'misc',
            extractor: {
                selector: 'rs[type="misc"]',
                extractionType: "textcontent",
                idAttribute: 'xml:id'
            },
        },
    ],
    textlayers: [
        {
            active: true,
            id: 'Origineel',
            type: 1,
            selector: 'text',
        },
        {
            active: true,
            id: 'Contemporain',
            type: 1,
            selector: 'text',
        },
        {
            active: false,
            id: 'tei',
            title: 'TEI',
            type: 2,
        },
    ]
};
export default extendConfig(config);
