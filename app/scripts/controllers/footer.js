'use strict';

angular.module('invirohubWebApp')
  .controller('FooterCtrl', function ($scope) {

  });


$('#hideonclick a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    if ($('.btn').is(":visible"))
        $('.btn').click();
});