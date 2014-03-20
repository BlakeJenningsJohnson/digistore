App.OrderRoute = Ember.Route.extend({
  actions: {
    submitBilling: function (attributes) {
      var order = this.store.createRecord('order', attributes);
      var cart = this.modelFor('application')
      order.set('cart', cart) 
      var self = this
      order.save().then(
        function (order) {
        self.transitionTo('confirmation', order).then(function () {
          var theCart = self.store.createRecord('cart');
            theCart.save().then(function (cart) {
              localStorage.cartId = theCart.id;
            });
          });
        },
      function (error) {
        alert(error.responseText)
      })
    }
  },
  model: function () {
    return {};
  }
});

