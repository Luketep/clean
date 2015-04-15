/*global require*/

require.config({
	baseUrl: 'js',
	paths: {
		'underscore': 'libs/underscore-min',
		'Backbone': 'libs/backbone-min',
		'jquery': 'libs/jquery-min',
		'Mustache': 'libs/mustache',
		'text': 'libs/text',
		'json2': 'libs/json2-min',
		'bootstrap': 'libs/bootstrap-min'
	},
	shim: {
		'bootstrap': {
			deps: ['jquery'],
			exports: 'bootstrap'
		}
	}
});