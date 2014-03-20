App.Item = DS.Model.extend({
  quantity: DS.attr("number"),
  cart: DS.belongsTo('cart', {async: true }),
  product: DS.belongsTo('product', {async: true }),
  currentPrice: DS.attr("number"),
  subtotal: function(){
    return (this.get('quantity') * this.get('currentPrice'))
  }.property('quantity', 'currentPrice')
});

// App.Item.FIXTURES = [
//   {
//     id: 1,
//     product: 1,
//     currentPrice: 200000,
//     quantity: 1
//   }, 
//   {
//     id: 2,
//     product: 2,
//     currentPrice: 200000,
//     quantity: 1
//   }
// ];