App = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },

  render() {
    return (
      <div className='container-fluid'>
        <Header />

        {this.props.children}
      </div>
    );
  },
});
