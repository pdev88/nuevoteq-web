'use strict';

angular.module('invirohubWebApp')
    .controller('ToolsDistributorCtrl', function ($scope) {
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
            apiService.post('http://invirohub-admin-api.invirohub.com/api/contact_form', model, function (err, result) {
                if (err) {
                    alert('There was an error processing the form');
                } else {

                    model.business_name = '';
                    model.business_nature = '';
                    model.first_name = '';
                    model.last_name = '';
                    model.email = '';

                    alert('Your message has been sent. Thank you.');

                }
            });
        };

    });
