const config = {
    slug: 'gekaaptebrieven',
    title: 'Gekaapte brieven',
    searchResultCount: 20,
    metadata: [
        {
            id: 'sender',
            title: 'Zender'
        },
        {
            id: 'recipient',
            title: 'Ontvanger'
        },
        {
            id: 'senderprof',
            title: 'Beroep zender'
        },
        {
            id: 'recipientprof',
            title: 'Beroep ontvanger'
        },
        {
            aside: false,
            id: 'corr',
        },
        {
            id: 'date',
            datatype: "date",
            order: 10,
            title: 'Datum'
        },
        {
            aside: false,
            datatype: "boolean",
            id: 'has_date',
            title: 'Datum bekend',
            order: 20,
        },
        {
            aside: false,
            id: 'sender_or_recipient',
            title: 'Zender of ontvanger'
        },
        {
            id: 'recipientloc',
            title: 'Locatie ontvanger'
        },
        {
            id: 'senderloc',
            title: 'Locatie zender'
        },
        {
            id: 'recipientgender',
            title: 'Geslacht ontvanger'
        },
        {
            id: 'sendergender',
            title: 'Geslacht zender'
        },
        {
            id: 'recipientship',
            title: 'Schip ontvanger'
        },
        {
            id: 'sendership',
            title: 'Schip zender'
        },
        {
            id: 'languages',
            title: 'Taal'
        },
        {
            id: 'texttypes',
            title: 'Tekstsoort'
        }
    ],
    pages: [
        { id: 'handleiding' },
        { id: 'achtergrond', children: [
                { id: 'gekaaptebrieven', title: 'Gekaapte brieven' },
                { id: 'transcriptieregels' },
                { id: 'werkwijze' },
            ] },
        {
            id: 'over', title: 'Over deze editie', children: [
                { id: 'links' },
                { id: 'publicaties' },
                { id: 'medewerkers' },
                { id: 'contact' },
            ]
        }
    ],
    textdata: [
        {
            color: '#fd7a7a',
            id: 'person',
            aside: true,
            extractor: {
                selector: 'ner[type="per"]',
                extractionType: "textcontent",
            },
        }, {
            color: '#5fb53f',
            id: 'org',
            aside: true,
            extractor: {
                selector: 'ner[type="org"]',
                extractionType: "textcontent",
            },
            title: 'Organisation'
        }, {
            color: 'orange',
            id: 'loc',
            aside: true,
            extractor: {
                selector: 'ner[type="loc"]',
                extractionType: "textcontent",
            },
            title: 'Location'
        }, {
            color: '#8080ff',
            id: 'misc',
            aside: true,
            extractor: {
                selector: 'ner[type="misc"]',
                extractionType: "textcontent",
            },
            title: 'Miscellaneous'
        },
    ]
};
export default config;
