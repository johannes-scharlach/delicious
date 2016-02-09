const { Link, IndexLink } = ReactRouter;

Header = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      query: Session.get('query') || '',
    };
  },

  handleSearch(event) {
    Actions.search(event.target.value);
  },

  render() {
    return (
      <header>
        <div className='header-container'>
          <IndexLink to='/' className='logo'>
            <div>Logo</div>
          </IndexLink>
          <div className='search-bar'>
            <input
              className='form-control'
              onChange={this.handleSearch}
              placeholder='Search for recipes here…'
              type='search'
              value={this.data.query}/>
          </div>
          <div className='menu'>Menu</div>
        </div>
      </header>
    );
  },
});
