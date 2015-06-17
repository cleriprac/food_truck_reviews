import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('review');
    // return reviews.store.find(truck_id);
  }
});
