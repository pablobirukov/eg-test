define(['lib/morearty-0.3.1', 'lib/react-0.11.1', 'lib/immutable'], function(Morearty, React, Immutable){
  return React.createClass({
    mixins: [Morearty.Mixin],
    saveToLS: function(){
      var binding = this.getDefaultBinding();
      localStorage.setItem('tree', JSON.stringify(binding.val().toJS()));
    },
    loadFromLS: function(){
      var binding = this.getDefaultBinding();
      binding.set('', Immutable.fromJS(JSON.parse(localStorage.getItem('tree'))));
    },
    render: function () {
      var _ = React.DOM;
      return _.div(
        {className: ''},
        React.DOM.button({type: 'button', className: 'btn btn-primary', onClick: this.saveToLS }, ' Save to LocalStorage '),
        React.DOM.button({type: 'button', className: 'btn btn-primary', onClick: this.loadFromLS }, ' Load from LocalStorage ')
      );
    }
  });
});