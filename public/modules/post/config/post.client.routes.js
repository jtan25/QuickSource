'use strict';

//Setting up route
angular.module('post').config(['$stateProvider',
	function($stateProvider) {
		// Post state routing
		$stateProvider.
		state('project', {
			url: '/project',
			templateUrl: 'modules/post/views/project.client.view.html'
		}).
		state('create', {
			url: '/create',
			templateUrl: 'modules/post/views/create.client.view.html'
		}).
		state('browse', {
			url: '/browse',
			templateUrl: 'modules/post/views/browse.client.view.html'
		});
	}
]);