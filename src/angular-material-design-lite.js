(function(){
  "use strict";

  angular.module('mdl', []);

  angular.module('mdl').provider("mdlConfig", function(){
    var provider = this;

    this.floating = true;

    provider.$get = function() {
      return provider;
    };
  });


  angular.module('mdl').directive('mdlTextField', function( mdlConfig ){
    return {
      restrict: 'EA',
      template: '<div class="mdl-textfield mdl-js-textfield" ng-class="ngClass"><input class="mdl-textfield__input" type="text" ng-model="ngModel" /><label class="mdl-textfield__label">{{label}}</label></div>',
      scope: {
        ngModel: '='
      },
      link: function($scope, el, $attrs){
        $scope.label  = $attrs.label;
        $scope.ngClass = {
          'mdl-textfield--floating-label': mdlConfig.floating
        };
      }
    };
  });

  angular.module('mdl').directive('mdlCheckbox', function(){
    return {
      restrict: 'EA',
      template: '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"><input type="checkbox" ng-model="ngModel" class="mdl-checkbox__input" /><span class="mdl-checkbox__label">{{label}}</span></label>',
      scope: {
        ngModel: '='
      },
      link: function($scope, el, $attrs){
        $scope.label  = $attrs.label;
      }
    };
  });

  angular.module('mdl').directive('mdlRadio', function(){
    return {
      restrict: 'EA',
      template: '<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect"><input type="radio" ng-model="ngModel" class="mdl-radio__button" name="options" value="{{value}}" /><span class="mdl-radio__label">{{label}}</span></label>',
      scope: {
        ngModel: '='
      },
      link: function($scope, el, $attrs){
        $scope.label  = $attrs.label;
        $scope.value  = $attrs.value;
      }
    };
  });


  angular.module('mdl').directive('mdlSwitch', function(){
    return {
      restrict: 'EA',
      template: '<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect"><input type="checkbox" ng-model="ngModel" class="mdl-switch__input" /><span class="mdl-switch__label">{{label}}</span></label>',
      scope: {
        ngModel: '='
      },
      link: function($scope, el, $attrs){
        $scope.label  = $attrs.label;
      }
    };
  });


})();
