import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var trucks = this.store.find('trucks');
    return trucks.then(function (trucks) {
      var truck = trucks[Math.floor(Math.random() * trucks.length)];
    });
    return truck;
  }
});
