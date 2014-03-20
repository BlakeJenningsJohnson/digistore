Ember.Handlebars.helper('format-price', function(price,y) {
  return (parseFloat(price)/100).toFixed(2);
});

