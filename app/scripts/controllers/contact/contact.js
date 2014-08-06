'use strict';

angular.module('invirohubWebApp')
  .controller('ContactContactCtrl', function ($scope, apiService) {

        var model = $scope.viewModel = {
            email : '',
            name : '',
            subject : 'suggestions',
            message : ''
        };

        $scope.submitForm = function () {
            apiService.post('http://invirohub-admin-api.invirohub.com/api/contact_form', model, function (err, result) {
               if(err){
                   alert('There was an error processing the form');
               }  else {

                   model.email = '';
                   model.name = '';
                   model.message = '';

                   alert('Your message has been sent. Thank you.');


               }
            });
        };
  });
