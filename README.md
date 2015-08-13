# angular-material-design-lite
> Version 0.3.0

![Angular Material Design Lite](http://i.imgur.com/SI4Nmb3.png)

Angular wrapper for [Material Design Lite](http://getmdl.io).


[View Documentation & Demo](https://desolate-fjord-7338.herokuapp.com/)


## Installation

`bower install angular-material-design-lite`


## Supported Directives

[Check Documentation](https://desolate-fjord-7338.herokuapp.com/)

## Configuration options

Floating text labels and ripple effect are enabled by default.  
Here's how you can disable them:

    angular.module('your-app').config(function(mdlConfigProvider){
        mdlConfigProvider.floating = false;
        mdlConfigProvider.rippleEffect = false;
    });

## Upgrading components in dynamic templates

You can use the `mdl-upgrade` attribute directive on elements that are inside ng-if or dynamically injected templates.
Check [issue #4](https://github.com/jadjoubran/angular-material-design-lite/issues/4) for more information.

## Questions, Issues and Feature Requests

Open a new issue.

## What's next?

Here's what I'm planning for the next releases


+ prism.js for docs
+ add tooltip support
+ add tabs support
+ support indeterminate progress bar
+ move additional attributes from directive to element
+ abstract ngClass conditions into service
+ split components across multiple files
+ automate releases using gulp
