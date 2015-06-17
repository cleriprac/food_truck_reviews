import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['truck'],
  actions: {
    addReview: function() {
      var newReview = this.store.createRecord('review', {
        author: this.get('author'),
        review: this.get('review'),
        truck: this.get('controllers.truck.model')
      });
      newReview.save();

      var truck = this.get('controllers.truck.model');
      truck.get('reviews').pushObject(newReview);
      truck.save();

      this.setProperties({
        author: '',
        review: ''
      });
    }
  }
});
