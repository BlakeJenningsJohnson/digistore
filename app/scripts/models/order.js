App.Order = DS.Model.extend({
  customerName: DS.attr("string"),
  email:         DS.attr("string"),
  status:        DS.attr("string"),
  cart:          DS.belongsTo("cart", {async: true}),
  cvv:           DS.attr("string"),
  zip:           DS.attr("string"),
  expDate:       DS.attr("string")
});

App.Order.FIXTURES = [
  {
    id: 1,
    cart: 1
  }
];