const config: DocereConfig = {
	slug: 'utrechtpsalter',
	title: 'Utrecht Psalter',
	textlayers: [
		{
			active: true,
			id: 'la',
			title: 'Latin',
			type: TextLayerType.TextLayer,
		},
		{
			active: false,
			id: 'nl',
			title: 'Dutch',
			type: TextLayerType.TextLayer,
		},
		{
			active: false,
			id: 'en',
			title: 'English',
			type: TextLayerType.TextLayer,
		},
		{
			active: false,
			id: 'fr',
			title: 'French',
			type: TextLayerType.TextLayer,
		},
	]
}

export default config
