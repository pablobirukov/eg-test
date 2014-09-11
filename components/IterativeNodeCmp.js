define(
  ['lib/morearty-0.3.1', 'lib/react-0.11.1', 'lib/immutable', 'components/RemoveNodeCmp'],
  function (Morearty, React, Immutable, RemoveNodeCmp) {
    var RecursiveNodeCmp = React.createClass({
      mixins: [Morearty.Mixin],
      render: function () {
        var ctx = this.getMoreartyContext(),
          _ = React.DOM,
          binding = this.getDefaultBinding();
        var self = this;
        return ctx._.div.apply(
          ctx._,
          [
            {className: 'tree-node ' + (this.props.level ? 'recursive-tree-node-gap': '')},
            binding.val('label'),
            RemoveNodeCmp({binding: binding})
          ].concat((binding.val('children') || Immutable.Vector()).toJS().map(function(i, index) {
                return RecursiveNodeCmp({binding: binding.sub('children').sub(index), level: self.props.level + 1});}
            ))
        );
      }
    });
    return RecursiveNodeCmp;
  }
);