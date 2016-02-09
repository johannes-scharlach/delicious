Meteor.publish('recipes', (recipeId) => {
  const query = recipeId ? { _id: recipeId } : {};
  return Recipes.find(query);
});
