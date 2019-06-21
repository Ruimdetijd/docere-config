const config: DocereConfig = {
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
			datatype: EsDataType.null,
			id: 'corr',
		},
		{
			id: 'date',
			datatype: EsDataType.date,
			order: 10,
			title: 'Datum'
		},
		{
			aside: false,
			datatype: EsDataType.boolean,
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
		{ id: 'handleiding', title: 'Handleiding', path: 'handleiding.xml' },
		{ id: 'achtergrond', title: 'Achtergrond', children: [
			{ id: 'gekaaptebrieven', title: 'Gekaapte brieven', path: 'over.xml' },
			{ id: 'transcriptieregels', title: 'Transcriptieregels', path: 'transcriptieregels.xml' },
			{ id: 'werkwijze', title: 'Werkwijze', path: 'werkwijze.xml' },
		]},
		{
			id: 'over', title: 'Over deze editie', children: [
				{ id: 'links', title: 'Links', path: 'links.xml' },
				{ id: 'publicaties', title: 'Publicaties', path: 'publicaties.xml' },
				{ id: 'medewerkers', title: 'Medewerkers', path: 'medewerkers.xml' },
				{ id: 'contact', title: 'Contact', path: 'contact.xml' },
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
				highlightType: TextDataHighlightType.textcontent,
				idAttribute: 'text'
			},
			title: 'Person'
		}, {
			color: '#5fb53f',
			id: 'org',
			aside: true,
			extractor: {
				selector: 'ner[type="org"]',
				highlightType: TextDataHighlightType.textcontent,
				idAttribute: 'text'
			},
			title: 'Organisation'
		}, {
			color: 'orange',
			id: 'loc',
			aside: true,
			extractor: {
				selector: 'ner[type="loc"]',
				highlightType: TextDataHighlightType.textcontent,
				idAttribute: 'text'
			},
			title: 'Location'
		}, {
			color: '#8080ff',
			id: 'misc',
			aside: true,
			extractor: {
				selector: 'ner[type="misc"]',
				highlightType: TextDataHighlightType.textcontent,
				idAttribute: 'text'
			},
			title: 'Miscellaneous'
		},
	]
}
export default config
