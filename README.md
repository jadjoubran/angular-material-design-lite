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

## Questions, Issues and Feature Requests

Open a new issue.

## What's next?

Here's what I'm planning for the next releases

+ add tooltip support
+ add tabs support
+ support indeterminate progress bar
+ move additional attributes from directive to element
+ abstract ngClass conditions into service
+ split components across multiple files
+ automate releases using gulp



### Changelog

### 0.3.0
+ implemented configurable floating for mdl-textarea

### 0.2.3
+ update documentation
+ support spinner

### 0.2.2
+ keep source file in dist/
+ generate sourcemap

### 0.2.1
+ implement textarea
+ added documentation on heroku instead of gh-pages

#### 0.2.0

+ implement progress controller
+ with attribute wathcers for progress
+ add examples folder

#### 0.1.2

+ implement buttons

#### 0.1.1

+ mdlConfigProvider for ripples
+ fixed angularjs dependency in bower


#### 0.1.0

+ exposed mdlConfigProvider
+ ability to enable/disable ripples using mdlConfigProvider

#### 0.0.3

+ implement switch


#### 0.0.2

+ implement radio
+ implement checkbox
+ fixed ng-model


#### 0.0.1

+ implement text fields
+ setup bower
+ gulp setup
+ repo setup
