var data = [{
    name: 'Margarita',
    price: '5.75'
}, {
    name: 'Dos XX',
    price: '5.00'
}, {
    name: 'Corona',
    price: '4.50'
}];

$(function(){
    //Simple Model
    MenuItemModel = Backbone.Model.extend();
  
    //Simple Collection
    MenuItemCollection = Backbone.Collection.extend({
        model:MenuItemModel
    });

    MenuView = Backbone.View.extend({
        //element to render into (must be in the DOM)
        el: "#menulist",
        //Rendering logic
        render: function(){
            var els = [];
            //loop over the collection
            this.collection.each(function(model){
                //Create a new ItemView using the model
                var v = new MenuItemView({model:model});
                //Push the elements into an array
                els.push(v.render().el);
                console.log(els);
            }); 
            //append into the DOM at once
            $(this.el).html(els);
        }
    });

    MenuItemView = Backbone.View.extend({
        //tag to render into
        tagName: 'li',
        //model
        model: MenuItemModel,
        //template function
        template: _.template($('#menu-item-template').html()),
        //event handling
        events: {'click':'itemClick'},
        //rendering
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        //Event handler
        itemClick: function(){
            $('#out').append('Thanks for the ' + this.model.get('name') + ' Jack! <br>');
        }
    });
    
    //initial binding and kickoff 
    $('#show-drinks').on('click',function(){
        //create the collection from data (or collection.fetch())
        var dataCollection = new MenuItemCollection(data);
        //create the main view
        var v = new MenuView({collection: dataCollection});
        //and render it
        v.render();
    });

});