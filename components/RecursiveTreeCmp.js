define(
  ['lib/morearty-0.3.1', 'lib/react-0.11.1', 'components/RecursiveNodeCmp', 'components/AddRootNodeCmp'],
  function (Morearty, React, RecursiveNodeCmp, AddRootNodeCmp) {
    'use strict';
    return React.createClass({
      mixins: [Morearty.Mixin],
      render: function () {
        var binding = this.getDefaultBinding();
        return React.DOM.div.apply(
          React.DOM.div,
          [{className: 'tree recursive-tree col-md-6'}, AddRootNodeCmp({binding: binding})].concat(
            binding.val().map(function(i, index){
                return RecursiveNodeCmp({binding: binding.sub(index), level: 0});
              }
            ).toJS()
          ));
      }
    });
  }
);
