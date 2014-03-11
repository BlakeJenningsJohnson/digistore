App.ProductsRoute = Ember.Route.extend({
  actions: {
    addToCart: function (product) {
      console.log("here is a product")
    },
  },
  model: function () {
    return this.store.find("product");
  }
})
