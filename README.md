# angular-material-design-lite
> Version 0.2.0

![Angular Material Design Lite](http://i.imgur.com/SI4Nmb3.png)

Angular wrapper for [Material Design Lite](http://getmdl.io).


[DEMO](http://jadjoubran.github.io/angular-material-design-lite/)


## Installation

`bower install angular-material-design-lite`


## Supported Directives

`<mdl-text-field label="First Name" ng-model="first_name"></mdl-text-field>`  
`<mdl-checkbox label="Urgent package" ng-model="is_urgent"></mdl-checkbox>`  
`<mdl-radio label="Male" value="male" ng-model="gender"></mdl-radio>`  
`<mdl-radio label="Female" value="female" ng-model="gender"></mdl-radio>`  
`<mdl-switch label="Notifications" ng-model="show_notifications"></mdl-switch>`   
`<mdl-button>Flat button</mdl-button>`   
`<mdl-button theme="primary">Primary Flat button</mdl-button>`   
`<mdl-button theme="accent">Accept Flat button</mdl-button>`   
`<mdl-button-raised theme="primary">Primary Raised button</mdl-button-raised>`   
`<mdl-progress progress="20"></mdl-progress>`   


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

+ implement textarea
+ keep source file in dist/ + generate sourcemap
+ move additional attributes from directive to element
+ fix ng-model
+ abstract ngClass conditions into service
+ split components across multiple files
+ automate releases using gulp



### Changelog

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
