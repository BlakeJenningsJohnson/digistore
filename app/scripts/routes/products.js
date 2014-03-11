App.ProductsRoute = Ember.Route.extend({
  actions: {
    addToCart: function (product) {
      console.log("here is a product");
      console.log(product.toString());
      var theCart = this.controllerFor('cart').get('model')
      var newItem = this.store.createRecord('item', { cart: theCart, product: product, quantity: 1 /* this.get('quantity') */ }); 
      // this.
      newItem.save();
      theCart.get('items').then(function (items) {
        items.pushObject(newItem)
      });
      console.log(newItem)
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
