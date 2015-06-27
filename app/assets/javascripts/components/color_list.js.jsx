var ColorList = React.createClass({
  getInitialState: function() {
    return {
      colors: this.props.colors
    };
  },
  render: function() {
    var _this = this; // capture this so we can access it within .map
    return (
      <ul className="color-list">
        { this.state.colors.map(function(color) { return <Color name={ color } colorChanged={ _this.props.colorChanged } />; }) }
      </ul>
    );
  }
});
