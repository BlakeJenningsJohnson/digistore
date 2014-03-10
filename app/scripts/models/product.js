App.Product = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  avatar: DS.attr("string"),
  image: DS.attr("string"),
  price: DS.attr('number')
});

App.Product.FIXTURES = [
  {
    id: 1,
    name: "ToothBrusherApp",
    description: "This handy app gives the illusion that you're brushing your teeth instead of browsing Twitter",
    image: "http://upload.wikimedia.org/wikipedia/commons/1/16/Toothbrush_toothbrush.JPG",
    avatar: "http://psysc613.wikispaces.com/file/view/smarmy-sales-man.jpg/248490699/smarmy-sales-man.jpg",
    price: "200000"
  }, 
  {
    id: 2,
    name: "Friend",
    description: "Here are some cool digital people to chill with in their giant loft",
    image: "http://mediasociety.drshellyblair.com/wp-content/uploads/2013/11/friends-tv-show-wallpapers-1280x1024.jpg",
    avatar: "http://psysc613.wikispaces.com/file/view/smarmy-sales-man.jpg/248490699/smarmy-sales-man.jpg",
    price: "200000"
  }
]