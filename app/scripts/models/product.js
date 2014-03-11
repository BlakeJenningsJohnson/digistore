App.Product = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  avatar: DS.attr("string"),
  image: DS.attr("string"),
  price: DS.attr('number'),
  item: DS.belongsTo("item", {async: true})
});

App.Product.FIXTURES = [
  {
    id: 1,
    name: "ImaginaryPet",
    description: "Everyone needs something to snuggle and clean up after",
    image: "http://placekitten.com/800/600",
    avatar: "http://placekitten.com/50/50",
    price: "200000"
  }, 
  {
    id: 2,
    name: "ImaginaryFriend",
    description: "You know you want him to come hang out",
    image: "http://fillmurray.com/g/800/600",
    avatar: "http://fillmurray.com/g/50/50",
    price: "200000"
  }
];