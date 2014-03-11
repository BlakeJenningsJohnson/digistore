App.Cart = DS.Model.extend({
  // deleteItem: function (item) {
  //   item.deleteRecord()
  //   item.save() #how will it find this item?
  // }
  items: DS.hasMany("item", {async: true} )
});

App.Cart.FIXTURES = [
  {
    id: 1,
    items: [1, 2]
  }
];