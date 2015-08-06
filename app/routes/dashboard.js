import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('data.json').then(function(data) {
      return data;
    });
  }
});