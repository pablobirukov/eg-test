define(['lib/morearty-0.3.1', 'lib/react-0.11.1', 'lib/immutable'], function(Morearty, React, Immutable) {
  var ctx = Morearty.createContext(React, Immutable, {}, { requestAnimationFrameEnabled: true});
  ctx._ = ctx.React.DOM;
  return ctx;
});