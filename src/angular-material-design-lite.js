(function(){

  "use strict";

  angular.module('mdl', []);

  angular.module('mdl').directive('mdlTextField', function(){
    return {
      restrict: 'EA',
      template: '<div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input" type="text" model="{{model}}" /><label class="mdl-textfield__label" for="sample1">{{label}}</label></div>',
      scope: {
        model: '=',
        placeholder: '='
      },
      link: function($scope, el, $attrs){
        $scope.model        = $attrs.model;
        $scope.label  = $attrs.label;
      }
    };
  });



})();
