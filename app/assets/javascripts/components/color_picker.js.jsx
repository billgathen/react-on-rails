var ColorPicker = React.createClass({
  getInitialState: function() {
    return {
      color: this.props.defaultColor
    }
  },
  colorChanged: function(name) {
    // reset state to new color, triggering rerender of all children
    this.setState({ color: name });
  },
  render: function() {
    return (
      <div className="color-picker">
        <h1>Color Picker</h1>
        <ColorDisplay color={ this.state.color }/>
        <ColorList colorChanged={ this.colorChanged } colors={ this.props.colors } />
      </div>
    )
  }
});
