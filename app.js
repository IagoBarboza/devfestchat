angular.module('app', ['ngRoute', 'app.chat', 'iowl'])

	.config(['$routeProvider', function ($routeProvider) {
		
		$routeProvider

		.when('/', {
			templateUrl: 'app_modules/chat/templates/chat.html',
			controller: 'ChatCtrl'
		})

		.when('/chat', {
			templateUrl: 'app_modules/chat/templates/chat.html',
			controller: 'ChatCtrl'
		})

	}])