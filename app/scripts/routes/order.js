App.OrderRoute = Ember.Route.extend({
  model: function () {
    return this.store.createRecord("order")
  },
  actions: {
    submitBilling: function (order) {
      var theCart = this.store.find('cart', 1)
      order.setProperties({ status:"pending", cart: theCart });
      order.save();
    },
  }
});


