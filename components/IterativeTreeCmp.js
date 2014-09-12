define(
  ['lib/morearty-0.3.1', 'lib/react-0.11.1', 'lib/immutable', 'components/RemoveNodeCmp', 'components/AddRootNodeCmp', 'components/TreeNodeCmp'],
  function (Morearty, React, Immutable, RemoveNodeCmp, AddRootNodeCmp, TreeNodeCmp) {
    'use strict';
    return React.createClass({
      mixins: [Morearty.Mixin],

      render: function () {
        var _ = React.DOM,
          binding = this.getDefaultBinding(),
          UnhandledBranch = function (node, position, depth, bindingPath) {
            this.node = node;
            this.position = position;
            this.depth = depth;
            this.bindingPath = bindingPath;
          },
          getNodeCmp = function (unhandledBranch) {
            return _.div({className: 'tree-node-wrapper'},
              TreeNodeCmp({binding: binding.sub(unhandledBranch.bindingPath), level: unhandledBranch.depth, key: unhandledBranch.bindingPath})
            );
          },
          flatLevel = function (unhandledBranches, acc, depth) {
            var newUnhandledLevels = [],
              unhandledBranchFactory = function (node, index) {
                return new UnhandledBranch(node, unhandledLevel.position + 1 + unhandledBranches.length, depth + 1, unhandledLevel.bindingPath + '.children.' + index);
              };
            while (unhandledBranches.length) {
              var unhandledLevel = unhandledBranches.pop();
              acc.splice(unhandledLevel.position, 0, getNodeCmp(unhandledLevel));
              if (unhandledLevel.node.children && unhandledLevel.node.children.length) {
                // add node list to begin of the newUnhandledLevels
                newUnhandledLevels.splice.apply(
                  newUnhandledLevels,
                  [0, 0].concat(unhandledLevel.node.children.map(unhandledBranchFactory)));
              }
            }
            return newUnhandledLevels;
          };

        // here we need not lazy object
        var jsTree = binding.val().toJS();
        var unhandledBranches = jsTree.map(function (node, index) {
            return new UnhandledBranch(node, 0, 0, index);
          }),
          nodeAccumulator = [],
          depth = 0;
        while (true) {
          var newUnhandledBranches = flatLevel(unhandledBranches, nodeAccumulator, depth);
          if (newUnhandledBranches.length) {
            unhandledBranches = newUnhandledBranches;
            depth++;
          } else break;
        }

        return _.div.apply(_.div, [
          {className: 'tree iterative-tree col-md-6'},
          AddRootNodeCmp({binding: binding})
        ].concat(nodeAccumulator));
      }
    });
  }
);