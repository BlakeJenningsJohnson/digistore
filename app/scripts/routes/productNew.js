App.ProductNewRoute = Ember.Route.extend ({
  model: function () {
    return {};
  },
  actions: {
    createProduct: function (attributes) {
      newProduct = this.store.createRecord("product", attributes);
      var self = this
      newProduct.save().then(
        function () {
          self.transitionTo("admin");
        },
        function (error) {
          alert(error.responseText);
          newProduct.deleteRecord();
          }
          );
    }
  }
});
    