App.<%= _.classify(modelName) %> = DS.Model.extend({
	<% _.each(attrs, function(attr, i) { %>
		<% if( attr.type == 'string' || attr.type=="number" || attr.type=="date" || attr.type=="boolean") { %>
			<%= _.camelize(attr.name) %>: DS.attr('<%= attr.type %>')<% if(i < (attributes.length - 1)) { %>,<% } %>
		<%}else{%>
			<%= _.camelize(attr.name) %>: DS.<%= attr.type %>('<%= attr.model %>')<% if(i < (attributes.length - 1)) { %>,<% } %>	
		<% } %>
	<% }); %>
});
  