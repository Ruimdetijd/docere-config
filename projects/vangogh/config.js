import { extendConfig } from '../../index';
const config = {
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
            datatype: "text",
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
                highlightType: "textcontent",
                idAttribute: 'key'
            },
            textLayers: ['translation'],
        }
    ],
    textlayers: [
        {
            active: true,
            id: 'facsimile',
            type: 0,
        },
        {
            active: true,
            id: 'original',
            type: 1,
            selector: 'div[type="original"]',
        },
        {
            active: false,
            id: 'translation',
            type: 1,
            selector: 'div[type="translation"]',
        },
        {
            active: false,
            id: 'tei',
            title: 'TEI',
            type: 2,
        }
    ]
};
export default extendConfig(config);
