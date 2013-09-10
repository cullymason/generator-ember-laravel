'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.

  //this.env.argument('model', { type: String, required: false });
  yeoman.generators.NamedBase.apply(this, arguments);

  this.controllerName = this._.strRightBack(this.name,'/');
  this.controllerName = this._.capitalize(this.controllerName);
  this.controllerPath;
  this.classifyControllerName = this._.classify(this.controllerName);
  if(this._.str.include(this.name,'/'))
  {
  	this.controllerPath = this._.strLeftBack(this.name,'/')+'/';
  	//console.log(this.viewPath);
  }
  this.controllerType="Object";

  if(this.options.array)
  {
  	this.controllerType="Array"
  };

};

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.files = function files() {
  this.template('_controller.js','ember/controllers/'+( typeof this.controllerPath  !== "undefined" ?  this.controllerPath : "" )+this.classifyControllerName+this.controllerType+'Controller.js')
};
