App.ManageOrdersRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('order');
  },
  actions: {
    updateOrder: function(order) {
      order.save();
      alert("Status has been updated.");
      this.transitionTo('manageOrders');
    },
    deleteOrder: function (order) {
      order.deleteRecord();
      order.save();
      this.transitionTo('manageOrders');
    }    
  }
});
