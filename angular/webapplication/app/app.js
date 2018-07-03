var app = angular.module('app', []);
app.controller('app', function($scope) {
    const uuidv1 = require('uuid/v1');
    const uuidv3 = require('uuid/v3');
    const uuidv4 = require('uuid/v4');
    const uuidv5 = require('uuid/v5');
    const guid = require('aguid');

    $scope.myVar = "Unique ID Generator";
    $scope.version1uuid = uuidv1();
    $scope.version3uuid = uuidv3();
    $scope.version4uuid = uuidv4();
    $scope.version5uuid = uuidv5();
    $scope.randomgeneratedguid = guid();

});
