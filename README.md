Ember/Laravel Generator
========================

> A Yeoman generator for building Ember web apps with a Laravel Backend

Installation
-------------

simply run ```npm install generator-ember-laravel```

**or**

Simply, clone this repository and then run 'npm link'.

> **Important**: when you clone the repository, clone it into a folder named "generator-ember-laravel". If you do not, the symlink will not work.

Commands
--------

### App

``` yo ember-laravel ```

scaffolds ember app inside main directory like so:

- ember/
- ember/model/
- ember/views/
- ember/templates/
- ember/controllers/
- ember/routes/
- app.js
- routes.js

### Model

``` yo ember-laravel:model ```

### Controller

``` yo ember-laravel:controller ```

### View

``` yo ember-laravel:view ```

### Templates

``` yo ember-laravel:templates templateName ```

creates

```hbs
{{!-- file located at ember/templates/templateName.hbs --}}
<h1> templateName Template </h1> 

```

> **Protip**: The command supports subdirectories. So if you type something like ```yo ember-laravel:template customers/index```, it would create a template located in ```ember/templates/customers/index.hbs```

### Routes

``` yo ember-laravel:route routeName ```

generates a route file ```ember/routes/routeName.js``` that follows this code structure:

```
App.RouteNameRoute = Ember.Route.extend({

  model: function(params) {
      return this.store.find('routeName',params.routeName_id); 
  }
  
});
```
