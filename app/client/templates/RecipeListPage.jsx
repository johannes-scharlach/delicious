RecipeListPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe('recipes');
    const query = Session.get('query') || '';

    return {
      isLoading: ! handle.ready(),
      recipes: Recipes.find({ name: { $regex: query, $options: 'i' } }).fetch(),
    };
  },

  handleClick(event) {
    this.context.router.push(`/recipe/${event.currentTarget.dataset.recipeId}`);
  },

  renderListItem(recipe, key) {
    // const imgPlaceholderStyle = { backgroundColor: 'red' };
    return (
      <div
        className='recipe-list-wrapper'
        data-recipe-id={recipe._id}
        key={key}
        onClick={this.handleClick}>
        <div className='recipe-list-item'>
          <div className='recipe-list-item-container'>
            {/* <img alt={recipe.photos && recipe.photos.length} /> */}
            <div className='img-placeholder' style={{ backgroundColor: 'red' }}></div>
            <div className='description'>
              <h2>{recipe.name}</h2>
              <p>{recipe.steps[0]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  },

  render() {
    return (
      <div className='row'>
        <div className='recipe-list'>
          {this.data.recipes.map(this.renderListItem)}
        </div>
      </div>
    );
  },
});
