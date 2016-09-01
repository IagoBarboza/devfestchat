angular.module('app.chat', ['firebase'])
	
	.factory('ChatService', function($firebaseArray) {
	
		function chat(){
			return $firebaseArray(firebase.database().ref('chat')); 
		}
	
		return {
			chat:chat
		};
	})

	.controller('ChatCtrl', function ($scope, IOWLToolbarService, ChatService) {
		// TOOLBAR
		IOWLToolbarService.enable();
		IOWLToolbarService.setTitle('DevFestChat');
		IOWLToolbarService.disable('back-button');		
		
		$scope.chat = ChatService.chat();

	});