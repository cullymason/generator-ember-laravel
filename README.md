Ember/Laravel Generator
========================

> A Yeoman generator for building Ember web apps with a Laravel Backend

Installation
-------------

simply run ```npm install generator-ember-laravel```

**or**

Simply, clone this repository and then run 'npm link'.

> **Important**: when you clone the repository, clone it into a folder named "generator-ember-laravel". If you do not, the symlink will not work.

From there you can use these Commands: 

Commands
--------


### App

> ``` yo ember-laravel ```

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

**UNDER DEVELOPMENT**

> ``` yo ember-laravel:model ```

### Controller

#### Object Controller (default)

> ``` yo ember-laravel:controller controllerName ```


```javascript

App.ControllerNameController = Ember.ObjectController.extend({
  
});
```

#### ArrayController

> ``` yo ember-laravel:controller controllerName --array```

```javascript

App.ControllerNameController = Ember.ArrayController.extend({
  
});
```


### View

> ``` yo ember-laravel:view viewName ```

creates

```javascript
App.ViewNameView = Ember.View.extend({

	//classNames: "container",
	//tagName: 'div'
  
});
```


### Templates

> ``` yo ember-laravel:templates templateName ```

creates

```Handlebars
{{!-- file located at ember/templates/templateName.hbs --}}
<h1> templateName Template </h1> 

```

> **Protip**: The command supports subdirectories. So if you type something like ```yo ember-laravel:template customers/index```, it would create a template located in ```ember/templates/customers/index.hbs```

### Routes

> ``` yo ember-laravel:route routeName ```

generates a route file ```ember/routes/routeName.js``` that follows this code structure:

```javascript
App.RouteNameRoute = Ember.Route.extend({

  model: function(params) {
      return this.store.find('routeName',params.routeName_id); 
  }
  
});
```
