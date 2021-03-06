App.Router.map(function(){
  this.route("home", { path: "/" });
  this.resource("cart");
  this.resource("order");
  this.resource('confirmation', { path: 'confirmation/:order_id' });
  this.resource("products", function() {
    this.resource('product', { path: ':product_id' });
  });
  this.resource('admin', function () {
    this.resource('adminProducts', { path: "products"}, function () {
      this.resource('productEdit', { path: ":product_id" });
      this.resource('productNew', {path: 'new'});
    })
    this.resource('manageOrders');
    this.resource('orderEdit', { path: 'orders'});
  }); 
});

