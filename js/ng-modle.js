(function() {
    //data
    var persons = [
        {
            name: "Paul"
        },
        {
            name: "Bonnie"
        },
        {
            name: 'kkaa'
        }
    ];

    var app = angular.module("app", []);
    app.controller("PersonListController", ['$scope', function($scope) {
        $scope.persons = persons;
    }]);

})()
