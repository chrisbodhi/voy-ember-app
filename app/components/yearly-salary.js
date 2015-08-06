import Ember from 'ember';

export default Ember.Component.extend({
  monthly: 0,

  yearlyTotal: function() {
    var monthly = this.get('monthly');
    
    console.log(monthly);
    
    return monthly * 12;
  }.property('monthly') // note to self: this property name === this.get('')
});