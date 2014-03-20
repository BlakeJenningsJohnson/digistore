App.ProductsRoute = Ember.Route.extend({
  actions: {
    addToCart: function (product) {
      // var theCart = this.controllerFor('cart').get('model')
      var theCart = this.modelFor('application')
      var store = this.store
      theCart.get('items').then(function (items) {
       return items.find(function (item) {
          return item.get('product').get('id') === product.get('id')
        })
      }).then(function (item) {
        if (item) {
          item.incrementProperty('quantity');
          item.save();
        } else {
          var newItem = store.createRecord('item', {
            cart: theCart, 
            product: product, 
            quantity: 1, 
            currentPrice: product.get('price')
          });
          theCart.get('items').pushObject(newItem);
          newItem.save();
        }
      });      
    },
  },
  model: function () {
    return this.store.find("product");
  },
});
