'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');

var RouteGenerator = module.exports = function RouteGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
  
  this.routeName = this._.strRightBack(this.name,'/');
  //separate the routes
  this.sluggifiedRouteName = this._.humanize(this.routeName);
  this.routeNameArray = this._.words(this.sluggifiedRouteName);
  this.routeNameArray[0] = this.routeNameArray[0].toLowerCase();
  this.routePath;

  this.isComplexRoute =function(){ if(this.routeNameArray.length == 2){return true}else{return false}};
  if(this._.str.include(this.name,'/'))
  {
  	this.routePath = this._.strLeftBack(this.name,'/')+'/';
  }
  this.classifyRouteName = this._.classify(this.routeName);
};




util.inherits(RouteGenerator, yeoman.generators.NamedBase);

RouteGenerator.prototype.files = function files() {


  this.template('_route.js', 'ember/routes/'+( typeof this.routePath  !== "undefined" ?  this.routePath : "" )+this.classifyRouteName+'Route.js');
  this.log.info('remember to update the routes.js file!');
};
