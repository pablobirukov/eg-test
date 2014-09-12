define(
  ['lib/morearty-0.3.1', 'lib/react-0.11.1', 'lib/immutable'],
  function (Morearty, React, Immutable) {
    'use strict';
    return React.createClass({
      mixins: [Morearty.Mixin],
      addRootNode: function () {

        this.getDefaultBinding().update(function (tree) {
          return tree.push(Immutable.fromJS({
            label: 'New Item',
            children: []
          }));
        });

      },
      render: function () {
        var _ = React.DOM;
        return _.div({className: 'tree-node-wrapper'},
          _.div({className: 'tree-node'},
            _.button({type: 'button', className: 'btn btn-default btn-sm', onClick: this.addRootNode}, 'Add root item')
          ));
      }
    });
  });