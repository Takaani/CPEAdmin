define([ 
  'jquery'
  ,'underscore'
  ,'backboneMaster'
	],function($, _, Backbone){

	var SearchBoxVinoView = Backbone.View.extend({
		el:'.head',
		initialize: function() {
		
	},
		events: {
			'keyup #searchText' : 'searchUser'
		},
	  
		searchUser: function(evt) {
			var self = this;
			if(self.timer)
				clearTimeout(self.timer);
				self.timer = setTimeout(function() {
				console.log('fired');

				var query =  $('#searchText').val();
			if(seccionActual==='vinos'){
				console.log('A BUSCAR VINOS//////');
				self.buscarVino(query);
			}else{
				console.log('A BUSCAR LIBRO//////');	
				self.buscarLibro(query);			
			}
			
			self.timer = null;
				}, 300);
		},
		buscarLibro: function(queryP){
			if(queryP.length>0) {
				router.navigate('#/search/'+queryP, {trigger : false});
			}
			else {
				router.navigate('#', {trigger:false});
			}
			var searchlist = new SearchListVinoView();
			searchlist.render({name:queryP})
			return false; 
		},
		buscarVino: function(queryP){
			if(queryP.length>0) {
				router.navigate('#/search/'+queryP, {trigger : false});
			}
			else {
				router.navigate('#', {trigger:false});
			}
			require([
				'views/vinos/SearchListVinoView'
				], function(SearchListVinoView){
					var searchlist = new SearchListVinoView();
					searchlist.render({name:queryP})
					return false; 
				})
			
		}


			
	});
	return SearchBoxVinoView;
});