angular.module('iowl', ['ngMaterial'])


/*####################################################  IOWL-TOOLBAR */

// SERVICE
.factory('IOWLToolbarService', [function(){

	var titleObj;
	var toolbarEnabled=false;
	var backButtonEnabled=false;
	var backRoute="";
	var titleClickHandler;
	
	function title(){
		return titleObj;
	}

	function setTitle(newTitle, clickHandler){
		titleObj = newTitle;
		if(clickHandler) titleClickHandler = clickHandler;
	}

	function isEnabled(component){
		// TOOLBAR
		if(!component) return toolbarEnabled;
		// BACK BUTTON
		if(component == 'back-button') return backButtonEnabled;
	}

	function enable(component){
		// TOOLBAR
		if(!component) toolbarEnabled = true;
		// BACK BUTTON
		if(component == 'back-button') backButtonEnabled = true;
	}

	function disable(component){
		// TOOLBAR
		if(!component) toolbarEnabled = false;
		// BACK BUTTON
		if(component == 'back-button') backButtonEnabled = false;
	}

	function setBackRoute(newBackRoute){
		backRoute = newBackRoute;
	}

	function back(){
		window.location.href="#/"+backRoute;
	}

	function titleClick(param){
		if(titleClickHandler) titleClickHandler(param);
		else console.log("No Handler");
	}

	return {
		title: title,
		setTitle: setTitle,
		isEnabled: isEnabled,
		enable: enable,
		disable: disable,
		setBackRoute: setBackRoute,
		back: back,
		titleClick: titleClick
	}
}])

// DIRECTIVE
.directive('iowlToolbar', ['IOWLToolbarService', function (IOWLToolbarService) {
	return {
		restrict: 'E',
		scope:{
		},
		compile: function(){
			return function(scope, iElements, iAttrs){
				scope.IOWLToolbarService = IOWLToolbarService;
			}
		},
		controller: function($scope, $element){},
		templateUrl: 'iowl/templates/toolbar.html' 
	};
}])


/*################################################### IOWL-TIME */

// SERVICE
.factory('IOWLTime', [function () {
	
	// CURRENT DATE
	function currentDate(){
		var d = new Date();
		var month = d.getMonth()+1;
		var day = d.getDate();

		var output = (day<10 ? '0' : '') + day + "-" 
	        + (month<10 ? '0' : '') + month + '-'
	        + d.getFullYear();

	  return output;
	}

	return {
		currentDate: currentDate
	};
}])