angular.module('app.chat', ['firebase', 'luegg.directives'])
	
	.factory('ChatService', function($firebaseArray) {
	
		function chat(){
			return $firebaseArray(firebase.database().ref('chat')); 
		}
	
		return {
			chat:chat
		};
	})

	.controller('ChatCtrl', function ($scope, IOWLToolbarService, ChatService, $anchorScroll, $location) {
		// TOOLBAR
		IOWLToolbarService.enable();
		IOWLToolbarService.setTitle('DevFestChat');
		IOWLToolbarService.disable('back-button');		
		
		// LOAD CHAT ARRAY
		$scope.chat = ChatService.chat();
		$scope.chat.$loaded(function(){
			// scroll bottom
		})

		// SETUP
		$scope.username = "";
		$scope.newMessage = ""

		// SEND MESSAGE
		$scope.sendMessage = function(){
			$scope.chat.$add({
				username: $scope.username,
				message: $scope.newMessage
			});
			$scope.newMessage = "";
			// scrool bottom
		}


	});