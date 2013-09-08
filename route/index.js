'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var RouteGenerator = module.exports = function RouteGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('creating Ember Route ' + this.name + '.');
  this.routeName = this.name;
};

util.inherits(RouteGenerator, yeoman.generators.NamedBase);

RouteGenerator.prototype.files = function files() {
  this.template('_route.js', 'ember/routes/'+this.routeName+'.js');
};
