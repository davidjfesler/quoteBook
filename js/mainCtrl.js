var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {

	
	var getQuotes = function() {
		$scope.list = dataService.getData();
	}

	$scope.togglefilter = false;
	$scope.toggleremove = false;
	$scope.togglebutton = false;

	$scope.toFilter = function() {
		$scope.togglefilter = !$scope.togglefilter;
	}

	$scope.addition = function() {
		$scope.togglebutton = !$scope.togglebutton;
	}

	$scope.subtraction = function() {
		$scope.toggleremove = !$scope.toggleremove;
	}

	$scope.addQuote = function() {
		var quote = {};
		quote.author = $scope.newAuthor;
		quote.text = $scope.newQuote;
		console.log(quote.author);
		dataService.addData(quote);
		getQuotes();
	}

	$scope.removeData = function() {
		dataService.removeData($scope.toRemove);
		getQuotes();
	}

	getQuotes();
})