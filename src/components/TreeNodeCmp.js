define(
  ['lib/morearty-0.3.1', 'lib/react-0.11.1', 'lib/immutable', 'components/RemoveNodeCmp', 'components/AddNodeCmp'],
  function (Morearty, React, Immutable, RemoveNodeCmp, AddNodeCmp) {
    'use strict';
    return React.createClass({
      mixins: [Morearty.Mixin],
      toggleEditing: function(value){
        this.getDefaultBinding().set('editing', !!value);
      },
      render: function () {
        var _ = React.DOM,
          binding = this.getDefaultBinding();
        return _.div(
          {className: 'tree-node', style: {'padding-left': this.props.level * 30 + 'px'}},
          _.input({
            onClick: this.toggleEditing.bind(this, true),
            onChange: Morearty.Callback.set(binding, 'label'),
            value: binding.val('label')
          }),
          _.div(
            {className: 'tree-node-control-block btn-group'},
            AddNodeCmp({binding: binding, parentCmp: this.props.parentCmp}),
            RemoveNodeCmp({binding: binding})
          )
        );
      }
    });
  }
);