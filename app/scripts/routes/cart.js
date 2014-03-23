App.CartRoute = Ember.Route.extend({
  model: function (params) {
    return this.controllerFor('application').get('cart'); //('cart', localStorage.cartId)
  },
  actions: {
    more: function (item) {
      var cart = this.controllerFor('application').get('cart').then(function (cart) {
      item.incrementProperty('quantity');
      item.set('cart', cart);
      item.save();
      });
    },
    less: function (item) {
      var cart = this.controllerFor('application').get('cart').then(function (cart) {
      item.decrementProperty('quantity');
      item.set('cart', cart);
      item.save(); 
      });
    },
    deleteItem: function (item) {
      var cart = this.controllerFor('application').get('cart').then(function (cart) {
      cart.get('items').then(function(items) {
        items.removeObject(item);
        item.deleteRecord();
        item.save();
      });
    });
    }
  }  
});

