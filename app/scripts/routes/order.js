App.OrderRoute = Ember.Route.extend({
  model: function () {
    return this.store.createRecord("order")
  },
  actions: {
    submitBilling: function (order) {
      var theCart = this.store.getById('cart', 1)
      order.setProperties({ status: "pending", cart: theCart });
      order.save();
      debugger
      this.transitionTo('confirmation');
    },
  }
});


