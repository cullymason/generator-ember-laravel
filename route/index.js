'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');

var RouteGenerator = module.exports = function RouteGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
  console.log('Creating Route: ' + this.name + 'Route.js');
  this.routeName = this._.strRightBack(this.name,'/');
  this.routePath;
  if(this._.str.include(this.name,'/'))
  {
  	this.routePath = this._.strLeftBack(this.name,'/')+'/';
  	//console.log(this.viewPath);
  }
  this.classifyRouteName = this._.classify(this.routeName);
};

util.inherits(RouteGenerator, yeoman.generators.NamedBase);

RouteGenerator.prototype.files = function files() {
  this.template('_route.js', 'ember/routes/'+( typeof this.routePath  !== "undefined" ?  this.routePath : "" )+this.classifyRouteName+'Route.js');
};
