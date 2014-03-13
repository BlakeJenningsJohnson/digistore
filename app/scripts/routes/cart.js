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
      });
      item.deleteRecord();
    },
    // checkout: function (cart) {
    //   var theCart = this.store.find('cart', 1) /*do i need to find the cart?*/
    //   var newOrder = this.store.createRecord('order', { status:"pending", cart: theCart });
    //   newOrder.save();
    //   this.transitionTo('order');
    // },
  },  
    // setupController: function (controller, model) {
    //   this.controllerFor('order').set('model', this.store.find('order', 1))
    //   controller.set('model', model)
    // }
});

