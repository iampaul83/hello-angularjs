(function() {
    var helloNg = angular.module(
        "hello-ng", // ng-app
        [] // module dependencies
    );

    //data
    var persons = [
        {
            name: "Paul",
            age: 25
        },
        {
            name: "Bonnie",
            age: 25
        }
    ];

    //controller
    helloNg.controller("PersonListController", function() {
        this.list = persons;
    });
})()
