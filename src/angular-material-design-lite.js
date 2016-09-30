(function() {
  "use strict";

  angular.module('mdl', []);

  angular.module('mdl').provider("mdlConfig", function() {
    var provider = this;

    this.floating = true;
    this.rippleEffect = true;

    provider.$get = function() {
      return provider;
    };
  });


  angular.module('mdl').directive('mdlTextField', function(mdlConfig) {
    return {
      restrict: 'A',
      template: '',
      scope: {},
      link: function($scope, el, $attrs) {
        var label = $attrs.placeholder || '',
          floatingLabel = mdlConfig.floating ? 'mdl-textfield--floating-label' : '',
          wrapper = angular.element('<div class="mdl-textfield mdl-js-textfield ' + floatingLabel + '" ng-class="ngClass"></div>'),
          label = angular.element('<label class="mdl-textfield__label">' + label + '</label>');

        el[0].classList.add('mdl-textfield__input');
        el[0].placeholder = '';

        el.after(wrapper);
        wrapper.prepend(el);
        wrapper.prepend(label);

        $scope.$on("$destroy", function() {
          wrapper.after(el);
          wrapper.remove();
        });
      }
    };
  });

  angular.module('mdl').directive('mdlCheckbox', function(mdlConfig) {
    return {
      restrict: 'E',
      template: '<label class="mdl-checkbox mdl-js-checkbox" ng-class="ngClass"><input type="checkbox" ng-model="ngModel" class="mdl-checkbox__input" /><span class="mdl-checkbox__label">{{label}}</span></label>',
      scope: {
        ngModel: '='
      },
      link: function($scope, el, $attrs) {
        $scope.label = $attrs.label;
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect
        };
      }
    };
  });

  angular.module('mdl').directive('mdlRadio', function(mdlConfig) {
    return {
      restrict: 'E',
      template: '<label class="mdl-radio mdl-js-radio" ng-class="ngClass"><input type="radio" ng-model="ngModel" class="mdl-radio__button" name="options" value="{{value}}" /><span class="mdl-radio__label">{{label}}</span></label>',
      scope: {
        ngModel: '='
      },
      link: function($scope, el, $attrs) {
        $scope.label = $attrs.label;
        $scope.value = $attrs.value;
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect
        };
      }
    };
  });


  angular.module('mdl').directive('mdlSwitch', function(mdlConfig) {
    return {
      restrict: 'E',
      template: '<label class="mdl-switch mdl-js-switch" ng-class="ngClass"><input type="checkbox" ng-model="ngModel" class="mdl-switch__input" ng-checked="ngModel" /><span class="mdl-switch__label">{{label}}</span></label>',
      scope: {
        ngModel: '='
      },
      link: function($scope, el, $attrs) {
        $scope.label = $attrs.label;
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect
        };
        $scope.$watch(function() {
          return $scope.ngModel;
        }, function(newValue) {
          if (!el[0].childNodes[0] || !el[0].childNodes[0].MaterialSwitch) {
            return false;
          }

          if (newValue) {
            el[0].childNodes[0].MaterialSwitch.on();
          } else {
            el[0].childNodes[0].MaterialSwitch.off();
          }
        });
      }
    };
  });


  angular.module('mdl').directive('mdlButton', function(mdlConfig) {
    return {
      restrict: 'A',
      template: '<button class="mdl-button mdl-js-button" ng-class="ngClass" ng-disabled="ngDisabled" ng-transclude></button>',
      scope: {
        ngModel: '='
      },
      transclude: true,
      link: function($scope, el, $attrs) {
        $scope.ngDisabled = $attrs.ngDisabled ? true : false;
        el.css('display', 'inline-block');
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect,
          'mdl-button--primary': $attrs.theme === 'primary',
          'mdl-button--accent': $attrs.theme === 'accent'
        };
      }
    };
  });

  angular.module('mdl').directive('mdlButtonRaised', function(mdlConfig) {
    return {
      restrict: 'A',
      template: '<button class="mdl-button mdl-js-button mdl-button--raised" ng-class="ngClass" ng-disabled="ngDisabled" ng-transclude></button>',
      scope: {
        ngModel: '='
      },
      transclude: true,
      link: function($scope, el, $attrs) {
        $scope.ngDisabled = $attrs.ngDisabled ? true : false;
        el.css('display', 'inline-block');
        $scope.ngClass = {
          'mdl-js-ripple-effect': mdlConfig.rippleEffect,
          'mdl-button--primary': $attrs.theme === 'primary',
          'mdl-button--accent': $attrs.theme === 'accent'
        };
      }
    };
  });


  angular.module('mdl').directive('mdlProgress', function(mdlConfig) {
    return {
      restrict: 'E',
      template: '<div id="p1" class="mdl-progress mdl-js-progress" ng-model="ngModel"></div>',
      scope: {
        ngModel: '='
      },
      transclude: true,
      link: function($scope, el, $attrs) {
        $attrs.$observe('progress', function(progress) {
          progress = parseInt(progress);
          if (progress) {
            var child = el[0].childNodes[0];
            if (child.MaterialProgress) {
              child.MaterialProgress.setProgress(progress);
            } else {
              child.addEventListener('mdl-componentupgraded', function() {
                child.MaterialProgress.setProgress(progress);
              });
            }
          }
        });
      }
    };
  });

  angular.module('mdl').directive('mdlSpinner', function(mdlConfig) {
    return {
      restrict: 'E',
      template: '<div class="mdl-spinner mdl-js-spinner is-active" ng-class="ngClass" ng-model="ngModel"></div>',
      scope: {
        ngModel: '='
      },
      link: function($scope, el, $attrs) {
        $scope.ngClass = {
          'mdl-spinner--single-color': $attrs.singleColor
        };
      }
    };
  });

  angular.module('mdl').directive('mdlUpgrade', function($timeout) {

    return {
      restrict: 'A',
      compile: function() {
        return {
          post: function postLink(scope, element) {
            $timeout(function() {
              componentHandler.upgradeElements(element[0]);
            }, 0);
          }
        };
      },
    };

  });

  angular.module('mdl').directive('mdlNavigationLayout', function(mdlConfig) {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div class="mdl-layout mdl-js-layout {{classlist}}" ' +
        'ng-class="layoutClasses">' +
        '<header class="mdl-layout__header" ng-class="headerClasses" ng-show="showHeader">' +
        '<div class="mdl-layout__header-row">' +
        '<span class="mdl-layout-title">{{mdlHeaderTitle}}</span>' +
        '<div class="mdl-layout-spacer"></div>' +
        '<nav class="mdl-navigation">' +
        '<span ng-repeat="el in mdlHeaderItems">' +
        '<a class="mdl-navigation__link" ng-show="!el.download"' +
        'ng-href="{{el.href||\'\'}}" hreflang="{{el.hreflang||\'\'}}" media="{{el.media||\'\'}}" rel="{{el.rel||\'\'}}" shape="{{el.shape||\'\'}}" target="{{el.target||\'_self\'}}" type="{{el.type||\'text/html\'}}" ng-click="el.onclick()"' +
        '>{{el.text}}</a>' +
        '<a class="mdl-navigation__link" ng-show="!!el.download" download ng-href="{{el.href||\'\'}}">{{el.text}}</a>' +
        '</span>' +
        '</nav>' +
        '</div>' +
        '</header>' +
        '<div class="mdl-layout__drawer">' +
        '<span class="mdl-layout-title">{{mdlMenuTitle}}</span>' +
        '<nav class="mdl-navigation">' +
        '<span ng-repeat="el in mdlMenuItems">' +
        '<a class="mdl-navigation__link" ng-show="!el.download"' +
        'ng-href="{{el.href||\'\'}}" hreflang="{{el.hreflang||\'\'}}" media="{{el.media||\'\'}}" rel="{{el.rel||\'\'}}" shape="{{el.shape||\'\'}}" target="{{el.target||\'_self\'}}" type="{{el.type||\'text/html\'}}" ng-click="el.onclick()"' +
        '>{{el.text}}</a>' +
        '<a class="mdl-navigation__link" ng-show="!!el.download" download ng-href="{{el.href||\'\'}}">{{el.text}}</a>' +
        '</span>' +
        '</nav>' +
        '</div>' +
        '<main class="mdl-layout__content" ng-transclude>' +
        '</main>' +
        '</div>',
      scope: {
        'class': '@',
        mdlMenuItems: '=',
        mdlMenuTitle: '=',
        mdlHeaderItems: '=',
        mdlHeaderTitle: '=',
      },
      link: function($scope, el, $attrs) {
        $scope.classlist = $attrs['class'];
        $scope.mdlFixedDrawer = $attrs.mdlFixedDrawer;
        $scope.mdlHeaderTransparent = $attrs.mdlHeaderTransparent;
        $scope.mdlFixedHeader = $attrs.mdlFixedHeader;
        $scope.showHeader = !$attrs.mdlHeaderHidden;
        $scope.layoutClasses = {
          'mdl-layout--fixed-drawer': $attrs.mdlFixedDrawer
        };
        $scope.headerClasses = {
          'mdl-layout__header--transparent': $attrs.mdlHeaderTransparent,
          'mdl-layout--fixed-header': $attrs.mdlFixedHeader
        };
      }
    };
  });
  
  angular.module('mdl').directive('mdlCardSquare', function(mdlConfig) {
    return {
      restrict: 'E',
      template: '<div class="mdl-card__title mdl-card--expand mdl-color--teal-300" style="{{style}}"> ' +
      '        <h2 class="mdl-card__title-text" >{{title}}</h2>' +
      '        </div>' +
      '        <div class="mdl-card__supporting-text mdl-color-text--grey-600" ng-show="text">{{text}}</div>' +
      '    <div class="mdl-card__actions mdl-card--border">' +
      '       <div ng-transclude></div>' +
      '        </div>' +
      '        </div>',
      scope: {
        ngModel: '='
      },
      transclude: true,
      link: function($scope, el, $attrs) {
        el.css('display', 'inline-block');
        $scope.title= $attrs.title;
        $scope.text= $attrs.text;
        $scope.style = $attrs.style;
      }
    };
  });

})();
