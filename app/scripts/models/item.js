App.Item = DS.Model.extend({
  quantity: DS.attr("number"),
  product: DS.belongsTo('product', {async: true }),
  subtotal: function(){
    return (this.get('quantity') * this.get('product').get('price'))
  }.property('quantity', 'this.product.price')
});

App.Item.FIXTURES = [
  {
    id: 1,
    product: 1,
    quantity: 1
  }, 
  {
    id: 2,
    product: 2,
    quantity: 1
  }
];