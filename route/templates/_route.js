App.<%= _.classify(modelName) %>Route = Ember.Route.extend({

  model: function(params) {
      return this.store.find('<%= _.classify(modelName) %>',params.badge_id); 
  }
  
});
