var data = [
    { name: 'Margarita', price: '5.75' },
    { name: 'Dos XX', price: '5.00' },
    { name: 'Corona', price: '4.50' }
];

// var listadecompras = [
//     'sabao',  //0 
//     'carne',  //1
//     'leite',  //2
//     'nescafe', //3
// ];


// for(var i = 0; i < listadecompras.length; i++){
//   console.log('Item: ', listadecompras[i]);  
// }

// var condition = false;
// var count = 0;

// while (!condition) {
//     console.log("Traveiz " + count);
//     count++;
//     if (count > 5) {
//         condition = true;
//         count = 0;
//     }
// }



// do {

//     console.log("De novo " + count);
//     count++;

//     if (count > 20) {
//         condition = false;
//     }

// } while (condition === true);


$(function() {
    //Simple Model
    MenuItemModel = Backbone.Model.extend();

    console.log('MenuItemModel: ', MenuItemModel);
    console.log(MenuItemModel);

    //Simple Collection
    MenuItemCollection = Backbone.Collection.extend({
        model: MenuItemModel
    });

    console.log('MenuItemCollection: ', MenuItemCollection);

    MenuView = Backbone.View.extend({
        //element to render into (must be in the DOM)
        el: "#menulist",
        //Rendering logic
        render: function() {
            var els = [];
            //loop over the collection
            this.collection.each(function(model) {
                //Create a new ItemView using the model
                var v = new MenuItemView({ model: model });
                //Push the elements into an array
                els.push(v.render().el);
                console.log(els);
            });
            //append into the DOM at once
            $(this.el).html(els);
        }
    });

    console.log('MenuView: ', MenuView);

    MenuItemView = Backbone.View.extend({
        //tag to render into
        tagName: 'li',
        //model
        model: MenuItemModel,
        //template function
        template: _.template($('#menu-item-template').html()),
        //event handling
        events: { 'click': 'itemClick' },
        //rendering
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        //Event handler
        itemClick: function() {
            $('#out').append('Thanks for the ' + this.model.get('name') + ' Jack! <br>');
        }
    });

    console.log('MenuItemView: ', MenuItemView);

    //initial binding and kickoff 
    $('#show-drinks').on('click', function() {
        //create the collection from data (or collection.fetch())
        var dataCollection = new MenuItemCollection(data);
        //create the main view
        var v = new MenuView({ collection: dataCollection });
        //and render it
        v.render();
    });

});
