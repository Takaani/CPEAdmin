define([
	'jquery'
	,'underscore'
    ,'backboneMaster'
    ,'collections/vinos/BuscarVinosCollection'
	],function($, _, Backbone, Vinos){
	var SearchListVinoView = Backbone.View.extend({
		getTitle: function (options) {
			if(options.name)
				return "Search vino";
		},
		el: '.content',	
		initialize: function(){

		}
		,
		render: function (options) {		
			var that =this;
			var vinos = new Vinos();
			console.log('SearchListVinoView CALLED----->123 ', vinos);
			vinos.fetch({
				data : {name: options.name
				},
				success: function(vinos){
					//content
					var template = _.template($('#content').html(), {vinos:vinos.models});
					that.$el.html(template);
				}
			});		
		}
    });
	return SearchListVinoView;
  });