App.Order = DS.Model.extend({
  customer_name: DS.attr("string"),
  email:         DS.attr("string"),
  status:        DS.attr("string"),
  cart:          DS.belongsTo("cart", {async: true}),
  cvv:           DS.attr("string"),
  zip:           DS.attr("string"),
  exp_date:      DS.attr("string")
});