require([
	'configuration'
],
function configurationLoaded() {
	'use strict';
	require([
		// Load more modules here
		'bootstrap'
	],
	function appLoaded() {
		console.info('// App is loaded, start coding here');
	});
});