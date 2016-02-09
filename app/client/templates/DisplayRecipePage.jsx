DisplayRecipePage = React.createClass({
  propTypes: {
    params: React.PropTypes.object.isRequired,
  },

  mixins: [ReactMeteorData],

  getMeteorData() {
    const recipeId = this.props.params.id;
    const handle = Meteor.subscribe('recipes', recipeId);

    return {
      isLoading: ! handle.ready(),
      recipe: Recipes.findOne(recipeId),
    };
  },

  renderIngredients() {
    return (
      <ul>
        {this.data.recipe.ingredients.filter(
          (ingredient) => !!ingredient.ingredient
        ).map((ingredient) => (
          <li>
            <span className='amount'>{ingredient.amount}</span>
            <span className='unit'> {ingredient.unit} </span>
            <span className='ingredient'>{ingredient.ingredient}</span>
          </li>
        ))}
      </ul>
    );
  },

  renderSteps() {
    return (
      <ol>
        {this.data.recipe.steps.filter((s) => !!s).map((s) => <li>{s}</li>)}
      </ol>
    );
  },

  render() {
    return (
      this.data.isLoading ?
        <LoadingPage /> :
        <div>
          <h1>{this.data.recipe.name}</h1>
          {this.renderIngredients()}
          {this.renderSteps()}
        </div>
    );
  },
});
