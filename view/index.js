'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Creating View: ' + this.name + 'View.js');
  this.viewName = this._.strRightBack(this.name,'/');
  this.viewPath;
  if(this._.str.include(this.name,'/'))
  {
  	this.viewPath = this._.strLeftBack(this.name,'/')+'/';
  	//console.log(this.viewPath);
  }
  this.classifyViewName = this._.classify(this.viewName);
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
  this.template('_view.js', 'ember/views/'+( typeof this.viewPath  !== "undefined" ?  this.viewPath : "" )+this.classifyViewName+'View.js');
};
