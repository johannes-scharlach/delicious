Recipes = new Mongo.Collection('recipes');
Images = new FS.Collection('images', {
  filter: {
    allow: { contentTypes: ['image/*'] },
    onInvalid(message) {
      if (Meteor.isClient) {
        alert(message);
      } else {
        console.warn(message);
      }
    },
  },
  stores: [new FS.Store.GridFS('images')],
});
