App.AdminProductsRoute = Ember.Route.extend({
  actions: {
    productDelete: function (product) {
      product.deleteRecord();
      product.save();
      this.transitionTo('admin');
    }
  },
  model: function () {
    return this.store.find('product');
  }
})  