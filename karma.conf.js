/**
 * Description: main karma entry
 */

module.exports = function(config) {
	config.set({
		frameworks: ['mocha'],
		files: [
			'test.webpack.js'
		],
		preprocessors: {
			'test.webpack.js': ['webpack']
		},
		webpack: {
			mode: 'development'
		},
		plugins: [
			'karma-chrome-launcher',
			'karma-mocha',
			'karma-webpack'
		]
	});
};
