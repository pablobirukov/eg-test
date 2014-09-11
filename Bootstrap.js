define(
  ['lib/react-0.11.1', 'Ctx', 'App'],
  function(React, Ctx, App){
  return React.createClass({
    componentWillMount: function () {
      Ctx.init(this);
    },
    render: function () {
      return React.withContext({ morearty: Ctx }, function () {
        return App({ binding: Ctx.getBinding() });
      });
    }
  });
});