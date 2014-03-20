App.ApplicationRoute = Ember.Route.extend ( {
  model: function () {
    var store = this.store
    if (typeof(localStorage.cartId) === "undefined") {
      var cart = this.store.createRecord('cart')
      return cart.save().then(function (cart) {
        localStorage.cartId = cart.id;
        return this.store.find('cart', localStorage.cartId)
      });
    } else {
      return this.store.find('cart', localStorage.cartId)
    }
  }
});