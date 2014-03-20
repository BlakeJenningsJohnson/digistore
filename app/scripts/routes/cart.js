App.CartRoute = Ember.Route.extend({
  model: function (params) {
    return this.modelFor('application'); //('cart', localStorage.cartId)
  },
  actions: {
    more: function (item) {
      var cart = this.modelFor('application')
      item.incrementProperty('quantity');
      item.set('cart', cart);
      item.save();
    },
    less: function (item) {
      var cart = this.modelFor('application')
      item.decrementProperty('quantity');
      item.set('cart', cart);
      item.save(); 
    },
    deleteItem: function (item) {
      cart = this.modelFor('application')
      cart.get('items').then(function(items) {
        items.removeObject(item);
        item.deleteRecord();
        item.save();
      });
    }
  }  
});

