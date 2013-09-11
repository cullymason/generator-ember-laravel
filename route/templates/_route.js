App.<%= _.classify(routeName) %>Route = Ember.Route.extend({

  model: function(params) {
      return this.store.find('<%= _.classify(routeName) %>',params.<%= _.classify(routeName) %>_id); 
  }
  
});

/*
	Add the following to the ember/routes.js file:

	<% if(isComplexRoute()){ %>
	change this.route("<%=routeNameArray[1]%>") to:

	this.resource("<%=routeNameArray[0]%>",function() {
		this.route("<%=routeNameArray[1]%>");
	});

	<% }else { %>
		this.route("<%= routeName %>");
	<% } %>
*/
