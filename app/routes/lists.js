import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var lists = this.store.findAll('list');
    return lists;
  }
});
