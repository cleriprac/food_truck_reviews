import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("about");
  this.resource("trucks", function() {
    this.route("new");
    this.resource("truck", {path: ":truck_id"}, function() {
      this.resource("reviews", function() {
        this.route("new");
      });
    });
  });
  this.route('featured', {path: '/'});
});

export default Router;
