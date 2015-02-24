define([
    'jquery'
    ,'underscore'
    ,'backbone'
    ,'text!templates/vinos/WineListItemView.html'
    ],function($, _, Backbone, indexVinos){
     var WineListItemView = Backbone.View.extend({   
        tagName: "li",        
        className: "span3",
        initialize: function () {
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.close, this);
        },

        render: function () {
            this.$el.html(_.template(indexVinos, this.model.toJSON()));               
            return this;
        }
    });
     return WineListItemView;
});
