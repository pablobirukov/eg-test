define(['lib/morearty-0.3.1', 'lib/react-0.11.1'], function(Morearty, React){
  'use strict';
  return React.createClass({
    mixins: [Morearty.Mixin],
    deleteNode: function(){
      var binding = this.getDefaultBinding();
      binding.delete('');
    },
    render: function () {
      return React.DOM.button({type: 'button', className: 'btn btn-default btn-sm', onClick: this.deleteNode}, 'Remove');
    }
  });
});