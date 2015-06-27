var ColorDisplay = React.createClass({
  render: function() {
    var myStyle = { backgroundColor: this.props.color }
    return (
      <div className='color-display' style={ myStyle }>{ this.props.color }</div>
    );
  }
});
