App.Item = DS.Model.extend({
  quantity: DS.attr("number"),
  product: DS.belongsTo('product', {async: true }),
  price: DS.attr("number"),
  subtotal: function(){
    return (this.get('quantity') * this.get('price'))
  }.property('quantity', 'price')
});

App.Item.FIXTURES = [
  {
    id: 1,
    product: 1,
    price: 200000,
    quantity: 1
  }, 
  {
    id: 2,
    product: 2,
    price: 200000,
    quantity: 1
  }
];