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
    pages: [],
    textdata: [
        {
            color: '#fd7a7a',
            id: 'person',
            aside: true,
            extractor: {
                selector: 'rs[type="pers"]',
                highlightType: "textcontent",
                idAttribute: 'key'
            },
            title: 'Person'
        }
    ],
    textlayers: [
        {
            id: 'facsimile',
            title: 'Facsimile',
            type: 0,
        },
        {
            id: 'original',
            title: 'Original',
            type: 1,
            selector: 'div[type="original"]',
        },
        {
            id: 'translation',
            title: 'Translation',
            type: 1,
            selector: 'div[type="translation"]',
        }
    ]
};
export default config;
