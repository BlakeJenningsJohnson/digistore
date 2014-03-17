App.ProductsRoute = Ember.Route.extend({
  actions: {
    addToCart: function (product) {
      // var theCart = this.controllerFor('cart').get('model')
      var theCart = this.modelFor('application')
      var newItem = this.store.createRecord('item', { 
                      cart: theCart, 
                      product: product, 
                      currentPrice: product.get('price'), 
                      quantity: 1 }); 
      newItem.save();
      theCart.get('items').then(function (items) {
        items.pushObject(newItem)
      });

      this.transitionTo('cart')
    }
  },
  model: function () {
    return this.store.find("product");
  },
});
