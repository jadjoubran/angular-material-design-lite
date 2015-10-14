(function(){
  "use strict";

  angular.module('mdl', []);

  angular.module('mdl').provider("mdlConfig", function(){
    var provider = this;

    this.floating = true;
    this.rippleEffect = true;

    provider.$get = function(){
      return provider;
    };
  });


  angular.module('mdl').directive('mdlTextField', function(mdlConfig){
    return {
      restrict: 'E',
      template: '<div class="mdl-textfield mdl-js-textfield" ng-class="ngClass"><input class="mdl-textfield__input" type="{{type}}" ng-model="ngModel" /><label class="mdl-textfield__label">{{label}}</label></div>',
      scope: {
        ngModel: '='
      },
      link: function($scope, el, $attrs){
        $scope.label = $attrs.label;
        $scope.type = $attrs.type ? $attrs.type : 'text';
        $scope.ngClass = {
          'mdl-textfield--floating-label': mdlConfig.floating
        };
      }
    };
  });

  angular.module('mdl').directive('mdlCheckbox', function(mdlConfig){
    return {
      restrict: 'E',
      template: '<label class="mdl-checkbox mdl-js-checkbox" ng-class="ngClass"><input type="checkbox" ng-model="ngModel" class="mdl-checkbox__input" /><span class="mdl-checkbox__label">{{label}}</span></label>',
      scope: {
        ngModel: '='
      },
      link: function($scope, el, $attrs){
        $scope.label = $attrs.label;
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect
        };
      }
    };
  });

  angular.module('mdl').directive('mdlRadio', function(mdlConfig){
    return {
      restrict: 'E',
      template: '<label class="mdl-radio mdl-js-radio" ng-class="ngClass"><input type="radio" ng-model="ngModel" class="mdl-radio__button" name="options" value="{{value}}" /><span class="mdl-radio__label">{{label}}</span></label>',
      scope: {
        ngModel: '='
      },
      link: function($scope, el, $attrs){
        $scope.label = $attrs.label;
        $scope.value = $attrs.value;
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect
        };
      }
    };
  });


  angular.module('mdl').directive('mdlSwitch', function(mdlConfig){
    return {
      restrict: 'E',
      template: '<label class="mdl-switch mdl-js-switch" ng-class="ngClass"><input type="checkbox" ng-model="ngModel" class="mdl-switch__input" ng-checked="ngModel" /><span class="mdl-switch__label">{{label}}</span></label>',
      scope: {
        ngModel: '='
      },
      link: function($scope, el, $attrs){
        $scope.label = $attrs.label;
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect
        };
        $scope.$watch(function(){
          return $scope.ngModel;
        }, function(newValue){
          if ( !el[0].childNodes[0] || !el[0].childNodes[0].MaterialSwitch ){
            return false;
          }

          if ( newValue ){
            el[0].childNodes[0].MaterialSwitch.on();
          }else{
            el[0].childNodes[0].MaterialSwitch.off();
          }
        });
      }
    };
  });


  angular.module('mdl').directive('mdlButton', function(mdlConfig){
    return {
      restrict: 'E',
      template: '<button class="mdl-button mdl-js-button" ng-class="ngClass" ng-transclude></button>',
      scope: {
        ngModel: '='
      },
      transclude: true,
      link: function($scope, el, $attrs){
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect,
          'mdl-button--primary': $attrs.theme === 'primary',
          'mdl-button--accent': $attrs.theme === 'accent'
        };
      }
    };
  });

  angular.module('mdl').directive('mdlButtonRaised', function(mdlConfig){
    return {
      restrict: 'E',
      template: '<button class="mdl-button mdl-js-button mdl-button--raised" ng-class="ngClass" ng-transclude></button>',
      scope: {
        ngModel: '='
      },
      transclude: true,
      link: function($scope, el, $attrs){
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect,
          'mdl-button--primary': $attrs.theme === 'primary',
          'mdl-button--accent': $attrs.theme === 'accent'
        };
      }
    };
  });


  angular.module('mdl').directive('mdlProgress', function(mdlConfig){
    return {
      restrict: 'E',
      template: '<div id="p1" class="mdl-progress mdl-js-progress" ng-model="ngModel"></div>',
      scope: {
        ngModel: '='
      },
      transclude: true,
      link: function($scope, el, $attrs){
        $attrs.$observe('progress', function(progress){
          progress = parseInt(progress);
          if (progress){
            var child = el[0].childNodes[0];
            if (child.MaterialProgress){
              child.MaterialProgress.setProgress(progress);
            }else{
              child.addEventListener('mdl-componentupgraded', function(){
                child.MaterialProgress.setProgress(progress);
              });
            }
          }
        });
      }
    };
  });

  angular.module('mdl').directive('mdlTextArea', function(mdlConfig){
    return {
      restrict: 'E',
      template: '<div class="mdl-textfield mdl-js-textfield" ng-class="ngClass"><textarea class="mdl-textfield__input" type="text" ng-model="ngModel"></textarea><label class="mdl-textfield__label">{{label}}</label></div>',
      scope: {
        ngModel: '='
      },
      link: function($scope, el, $attrs){
        $scope.label = $attrs.label;
        $scope.ngClass = {
          'mdl-textfield--floating-label': mdlConfig.floating
        }
      }
    };
  });


  angular.module('mdl').directive('mdlSpinner', function(mdlConfig){
    return {
      restrict: 'E',
      template: '<div class="mdl-spinner mdl-js-spinner is-active" ng-class="ngClass" ng-model="ngModel"></div>',
      scope: {
        ngModel: '='
      },
      link: function($scope, el, $attrs){
        $scope.ngClass = {
          'mdl-spinner--single-color': $attrs.singleColor
        };
      }
    };
  });

  angular.module('mdl').directive('mdlUpgrade', function($timeout){

    return {
      restrict: 'A',
      compile: function(){
        return {
          post: function postLink(scope, element){
            $timeout(function(){
              componentHandler.upgradeElements(element[0]);
            }, 0);
          }
        };
      },
    };

  });

})();
