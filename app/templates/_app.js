<%= _.slugify(namespace) %> = Ember.Application.create({
	LOG_TRANSITIONS: true
});

<%= _.slugify(namespace) %>.Store = DS.Store.extend({
  adapter: DS.RESTAdapter.extend({
  })
});


var attr = DS.attr;