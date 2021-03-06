"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
                extractionType: "attribute",
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
            active: false,
            id: 'original',
            type: 1,
            selector: 'div[type="original"]',
        },
        {
            active: false,
            id: 'original-tei',
            title: 'Original TEI',
            type: 2,
            selector: 'div[type="original"]',
        },
        {
            active: true,
            id: 'translation',
            type: 1,
            selector: 'div[type="translation"]',
        },
        {
            active: false,
            id: 'translation-tei',
            title: 'Translation TEI',
            type: 2,
            selector: 'div[type="translation"]',
        },
        {
            active: false,
            id: 'tei',
            title: 'Full TEI',
            type: 2,
        },
    ]
};
exports.default = config;
