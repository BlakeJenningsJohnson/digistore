App.Router.map(function(){
  this.route("home", { path: "/" })
  this.resource("cart");
  this.resource("order");
  this.resource('confirmation', { path: ':order_id' });
  this.resource("products", function() {
    this.resource('product', { path: ':product_id' })
  }) 
});

