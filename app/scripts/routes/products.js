App.ProductsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("product");
  },

  actions: {
    addToCart: function (product) {
      // var theCart = this.controllerFor('cart').get('model')
      var store = this.store
      this.controllerFor('application').get('cart').then(function (cart) {
      cart.get('items').then(function (items) {
       return items.find(function (item) {
          return item.get('product').get('id') === product.get('id')
        })
      }).then(function (item) {
        if (item) {
          item.incrementProperty('quantity');
          item.save();
        } else {
          var newItem = store.createRecord('item', {
            cart: cart, 
            product: product, 
            quantity: 1, 
            currentPrice: product.get('price')
          });
          cart.get('items').pushObject(newItem);
          newItem.save();
        }
      })
    })      
  }
}
});
