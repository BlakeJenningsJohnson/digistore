App.Router.map(function(){
  this.route("home", { path: "/" })
  this.resource("cart");
  this.resource("order");
  this.route('confirmation');
  this.resource("products", function() {
    this.resource('product', { path: ':product_id' })
  }) 
});

