import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addReview: function() {
      var newReview = this.store.createRecord('review', {
        author: this.get('author'),
        review: this.get('review'),
      });
      newReview.save();
      this.setProperties({
        author: '',
        review: ''
      });
    }
  }
});
