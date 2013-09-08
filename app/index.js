'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var EmberLaravelGenerator = module.exports = function EmberLaravelGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(EmberLaravelGenerator, yeoman.generators.Base);

EmberLaravelGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'namespace',
    message: 'What namespace would you like to use?',
    default: 'App'
  }];

  this.prompt(prompts, function (props) {
    this.namespace = props.namespace;

    cb();
  }.bind(this));
};

EmberLaravelGenerator.prototype.app = function app() {
  this.mkdir('ember');
  this.mkdir('ember/models');
  this.mkdir('ember/views');
  this.mkdir('ember/controllers');
  this.mkdir('ember/templates');
  this.mkdir('ember/routes');
  this.template('_app.js', 'ember/app.js');
  this.template('_router.js', 'ember/router.js');
  this.template('_bower.json', 'bower.json');
  this.template('_package.json', 'package.json');
  this.template('_Gruntfile.js','Gruntfile.js');
  this.template('_.bowerrc','.bowerrc');

};

EmberLaravelGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
