App.OrderRoute = Ember.Route.extend({
  actions: {
    submitBilling: function (attributes) {
      // var theCart = this.store.find('cart', 1)
      var order = this.store.createRecord('order', attributes) /*attach to cart?*/
      var self = this
      // order.setProperties({ status: "pending", cart: theCart });
      order.save().then(
        function (order) {
        self.transitionTo('confirmation', order); //order.get('id')?
      }, 
      function (error) {
        order.deleteRecord()
        alert(error.responseText)
      })
    }
  },
  model: function () {
    return {};
  }
});


