# angular-material-design-lite
> Version 0.0.3

![Angular Material Design Lite](http://i.imgur.com/SI4Nmb3.png)

Angular wrapper for [Material Design Lite](http://getmdl.io).


## Installation

`bower install angular-materail-design-lite`


## Supported Directives

`<mdl-text-field label="First Name" ng-model="first_name"></mdl-text-field>`  
`<mdl-checkbox label="Urgent package" ng-model="is_urgent"></mdl-checkbox>`  
`<mdl-radio label="Male" value="male" ng-model="gender"></mdl-radio>`  
`<mdl-radio label="Female" value="female" ng-model="gender"></mdl-radio>`  
`<mdl-switch label="Notifications" ng-model="show_notifications"></mdl-switch>`


## Issues and Feature Requests

Open a new issue.

## What's next?

Here's what I'm planning for the next releases

+ expose configProvider + allow to set options for ripples and floating labels
+ use ng-transclude
+ fix ng-model
+ abstract ngClass conditions into service?
+ other classes need options?
+ update readme for mdlFloatingText
+ fix bower versionning
+ keep source file in dist/ + generate sourcemap
+ implement buttons
+ setup gh-pages
+ add examples folder
+ split components across multiple files


## Changelog

### 0.1.0

+ exposed mdlConfigProvider
+ ability to enable/disable ripples using mdlConfigProvider

### 0.0.3

+ implement switch


### 0.0.2

+ implement radio
+ implement checkbox
+ fixed ng-model


### 0.0.1

+ implement text fields
+ setup bower
+ gulp setup
+ repo setup
