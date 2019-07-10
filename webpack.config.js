const path = require( 'path' );

const WebpackBar = require( 'webpackbar' );

module.exports = [

	// Build the settings js..
	{
		entry: [ './src/special-characters.js' ],
		output: {
			filename: 'special-characters.js',
			path: __dirname + '/dist/',
		},
		module: {
			rules: [
				{
					test: /\.js$/,

					use: [
						{
							loader: 'babel-loader',
							query: {
								presets: [ [ '@babel/env', {
									'useBuiltIns': 'entry',
								} ], '@babel/preset-react' ],
							}
						},
						{
							loader: 'eslint-loader',
							options: {
								failOnError: true,
							}
						}
					]
				},
				{
					test: /\.css$/,
					use: [ 'style-loader', 'css-loader' ],
				},
			]
		},
		plugins: [ new WebpackBar(
			{
				name: 'Plugin Entry Points',
				color: '#B6CD58',
			}
		) ],
	},

];
