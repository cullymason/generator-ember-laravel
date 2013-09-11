'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
  this.modelName = this.name;
  console.log('You called the model subgenerator with the argument ' + this.name + '.');
  this.argument('attributes', { type: Array, defaults: [], banner: 'field[:type] field[:type]' });
  this.attrs = this.attributes.map(function (attr) {
    var parts = attr.split(':');
    return {
      name: parts[0],
      type: parts[1] || 'string',
      model: parts[2] || null
    };
  });
  //console.log(this.attrs)

};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.files = function files() {
	this.template('_model.js', 'ember/models/' + this._.classify(this.modelName) + 'Model.js');
};
