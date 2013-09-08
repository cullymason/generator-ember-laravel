App.<%= _.classify(routeName) %>Route = Ember.Route.extend({

  model: function(params) {
      return this.store.find('<%= _.classify(routeName) %>',params.<%= _.classify(routeName) %>_id); 
  }
  
});
