import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addReview: function() {
      var newReview = this.store.createRecord('reviews', {
        author: this.get('author'),
        review: this.get('review')
      });
      newTruck.save();
      this.setProperties({
        author: '',
        review: ''
      });
    }
  }
});
