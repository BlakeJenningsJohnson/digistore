App.ProductsController = Ember.ArrayController.extend({ /*object controller? */
  actions: {

  },



  // actions: {
  //   addToCart: function () {
  //     var newItem = this.store.createRecord('item', { product: product, quantity: 1 /* this.get('quantity') */ }) 
  //     item.save();
  //   }
  // }
});


// actions: {
//             save: function(){
//                 // create new user record in store
//                 var newUser = this.store.createRecord('user', {
//                     name : this.get('newUserName'),
//                     creationDate : new Date()
//                 });

//                 // create new selection record in store
//                 var newSelection = this.store.createRecord('selection', {
//                     id : 11,
//                     value : "hallo"
//                 });

//                 // push selection to user
//                 newUser.get('selections').pushObject(newSelection);

//                 // save new user
//                 newUser.save();