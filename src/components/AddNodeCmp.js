define(['lib/morearty-0.3.1', 'lib/react-0.11.1', 'lib/immutable'], function(Morearty, React, Immutable){
  return React.createClass({
    mixins: [Morearty.Mixin],
    addChildNode: function(){
      var binding = this.getDefaultBinding();
      var children = binding.val('children');
      binding.set('children', children.push(Immutable.fromJS({
        label: 'new Item',
        children: []
      })));
      if (this.props.parentCmp) {
        this.props.parentCmp.forceUpdate();
      }
    },
    render: function () {
      return React.DOM.button({type: 'button', className: 'btn btn-default btn-sm', onClick: this.addChildNode }, 'Add child');
    }
  });
});