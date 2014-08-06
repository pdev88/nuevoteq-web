'use strict';

angular.module('invirohubWebApp')
    .controller('ToolsSoftwareCtrl', function ($scope) {
        var model = $scope.viewModel = {
            business_type  : 'sole_proprietor',
            business_name  : '',
            business_nature: '',
            first_name     : '',
            last_name      : '',
            email          : '',
            province       : 'gauteng'
        };

        $scope.init = function () {

        };

        $scope.postForm = function () {

        };

    });
