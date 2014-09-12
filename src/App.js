define(
  ['lib/morearty-0.3.1', 'lib/react-0.11.1', 'components/RecursiveTreeCmp', 'components/IterativeTreeCmp', 'components/LocalStorageManipulator'],
  function (Morearty, React, RecursiveTreeCmp, IterativeTreeCmp, LocalStorageManipulator) {
    'use strict';
    return React.createClass({
      mixins: [Morearty.Mixin],
      render: function () {
        var binding = this.getDefaultBinding(),
          treeBinding = binding.sub('tree');
        var _ = React.DOM;
        return _.div({},
          _.div(
            {className: 'col-md-12'},
            RecursiveTreeCmp({binding: treeBinding}),
            IterativeTreeCmp({binding: treeBinding})
          ),
          _.div(
            {className: 'col-md-12'},
            LocalStorageManipulator({binding: treeBinding})
          )
        );
      }
    });
  });