require(['Ctx', 'Bootstrap', 'lib/immutable', 'lib/jquery-2.1.1'], function(Ctx, Bootstrap, Immutable){
  $.getJSON('api/getTree.json').done(function(data){
    Ctx.getBinding().set('tree', Immutable.fromJS(data));
    Ctx.React.renderComponent(
      Bootstrap(),
      document.getElementById('app')
    );
  }).fail(function(err){
    console.error(arguments);
  });
});
