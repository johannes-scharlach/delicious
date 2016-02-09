Meteor.methods({
  addRecipe(ingredients, name, photos, steps) {
    console.log(`inserting a recipe called ${name}`);

    Recipes.insert({
      ingredients,
      name,
      photos,
      steps,
      // author: Meteor.userId(),
      // username: Meteor.user().username,
      createdAt: Date.now(),
    });
  },
});
