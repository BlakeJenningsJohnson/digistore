App.OrderRoute = Ember.Route.extend({
  actions: {
    submitBilling: function (attributes) {
      var self = this
      var order = this.store.createRecord('order', attributes);
      var cart = this.controllerFor('application').get('cart').then(function (cart) {
        order.set('cart', cart),
        order.set('status', 'paid') 
        order.save().then(
        function (order) {
          var cart = self.store.createRecord('cart');
            cart.save().then(function (cart) {
              localStorage.cartId = cart.get('id');
              self.controllerFor('application').set('cart', self.store.find("cart", localStorage.cartId))
          });
          self.transitionTo('confirmation', order);
        });
      // function (error) {
      //   alert(error.responseText)
      // }
      })
    }
  },
  model: function () {
    return {};
  }
});

