import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteList(){
      this.$().slideUp('normal',()=>{
        this.list.deleteRecord();
        this.list.save();
      });
    },
    hideForm(){
      this.$('.form-hide').hide();
    },
    showForm(){
      this.$('.form-hide').show();
    },
    addCard(){
      this.sendAction('action', this.itemDescription, this.list)
    }
  }
});
