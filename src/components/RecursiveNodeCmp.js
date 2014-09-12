define(
  ['lib/morearty-0.3.1', 'lib/react-0.11.1', 'lib/immutable', 'components/RemoveNodeCmp', 'components/TreeNodeCmp'],
  function (Morearty, React, Immutable, RemoveNodeCmp, TreeNodeCmp) {
    'use strict';
    var RecursiveNodeCmp = React.createClass({
      mixins: [Morearty.Mixin],
      render: function () {
        var _ = React.DOM,
          binding = this.getDefaultBinding();
          var self = this;
          return _.div.apply(
            _,
            [
              {className: 'tree-node-wrapper'},
              TreeNodeCmp({binding: binding, level: self.props.level})
            ].concat((binding.val('children') || Immutable.Vector()).toJS().map(function(i, index) {
                return RecursiveNodeCmp({binding: binding.sub('children').sub(index), level: self.props.level + 1}); }
              ))
          );
      }
    });
    return RecursiveNodeCmp;
  }
);