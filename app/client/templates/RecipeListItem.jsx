RecipeListItem = React.createClass({
  render() {
    return (
      <div>
        <img src={recipe.img} />
        <div className='description'>
          <h2>{recipe.name}</h2>
          <p>{recipe.steps[0]}</p>
        </div>
      </div>
    );
  },
});
