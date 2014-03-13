App.ItemRoute = Ember.Route.extend({
  return this.store.find('item')
});