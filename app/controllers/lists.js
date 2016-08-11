import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create(){
      var el = this.store.createRecord('list', {
        title: this.listTitle
      });

      el.save();
    },
    addCard(itemDescription, list){
      var item = this.store.createRecord('item', {
        description: itemDescription
      });

      list.get('items').then(()=>{
        list.get('items').addObject(item);

        item.save();
        list.save();
      });
    }
  }
});
