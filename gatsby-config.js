module.exports = {
	pathPrefix: '/yonghe-online',
	siteMetadata: {
		title: 'title',
		description: 'description',
		author: 'author',
		mode: 'test'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/testData`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sass',
		'gatsby-plugin-manifest'
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
