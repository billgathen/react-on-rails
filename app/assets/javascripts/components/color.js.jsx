var Color = React.createClass({
  chosen: function() {
    // send message back to ColorPicker
    this.props.colorChanged(this.props.name);
  },
  render: function() {
    var myStyle = { backgroundColor: this.props.name }
    return (
      <li className="color" style={ myStyle } onClick={ this.chosen }>{ this.props.name }</li>
    );
  }
});
