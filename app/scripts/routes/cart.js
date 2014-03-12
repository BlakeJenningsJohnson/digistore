App.CartRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("cart", 1);
  },
  actions: {
    more: function (item) {
      item.incrementProperty('quantity');
    },
    less: function (item) {
      item.decrementProperty('quantity');   
    },
    deleteItem: function (item) {
      this.store.find('cart', 1).then(function(cart) {
        cart.get('items').then(function(items) {
          items.removeObject(item);
        });
        item.deleteRecord();
      });
    }
  }
});