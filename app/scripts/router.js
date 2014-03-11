App.Router.map(function(){
  this.route("home", { path: "/" })
  this.resource("cart", function () {
    this.resource("item");
  }),
  this.resource("products", function() {
    this.resource('product', { path: ':product_id' })
  }) 
});

