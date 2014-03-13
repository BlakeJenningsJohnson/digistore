App.ProductsRoute = Ember.Route.extend({
  actions: {
    addToCart: function (product) {
      var theCart = this.controllerFor('cart').get('model')
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
  setupController: function(controller, model) {
    this.controllerFor('cart').set('model', this.store.find('cart', 1))
    controller.set('model', model)
  }
});
