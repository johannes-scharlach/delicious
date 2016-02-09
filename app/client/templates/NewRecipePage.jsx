NewRecipePage = React.createClass({
  getInitialState() {
    return {
      ingredients: [
        { amount: 3, ingredient: 'cucumbers' },
        { amount: 100, unit: 'gr', ingredient: 'salt' },
        {},
      ],
      name: 'Test recipe',
      photos: [],
      steps: ['Cut up the cucumbers', 'Pour the salt over them', ''],
    };
  },

  handleFileUpload(event) {
    FS.Utility.eachFile(event, (file) => {
      this.setState({ uploading: true });

      Images.insert(file, (err, fileObj) => {
        if (!err) {
          console.log('uploaded file');
          console.log(fileObj);

          this.setState((state) => ({
            photos: state.photos.push(`/cfs/files/images/${fileObj._id}`),
            uploading: false,
          }));
        }
      });
    });
  },

  handleIngredientChange(key, prop, event) {
    this.setState((state) => {
      const ingredients = state.ingredients;
      ingredients[key][prop] = event.target.value;

      if (ingredients.length === key + 1) {
        ingredients.push({});
      }

      return { ingredients: state.ingredients };
    });
  },

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  },

  handleStepChange(key, event) {
    this.setState((state) => {
      const steps = state.steps;
      steps[key] = event.target.value;

      if (steps.length === key + 1) {
        steps.push('');
      }

      return { steps: state.steps };
    });
  },

  handleSubmit(event) {
    event.preventDefault();

    console.log('photos added:');
    console.log(this.state.photos);

    Meteor.call(
      'addRecipe',
      this.state.ingredients,
      this.state.name,
      this.state.photos,
      this.state.steps
    );
  },

  renderIngredientInputs() {
    return (
      <div>
        {this.state.ingredients.map((ingredient, key) => (
            <IngredientRow
              key={key}
              ingredient={ingredient}
              onChange={this.handleIngredientChange.bind(this, key)}
              that={this} />
        ))}
      </div>
    );
  },

  renderStepInputs() {
    return (
      <ol>
        {this.state.steps.map((step, key) => (
            <li key={key} >
              <textarea
                className='form-control'
                value={step}
                onChange={this.handleStepChange.bind(this, key)}>
              </textarea>
            </li>
        ))}
      </ol>
    );
  },

  render() {
    return (
      <form className='new-recipe' onSubmit={this.handleSubmit}>
        <div className='row'>
          <div className='col-xs-12'>
            <label>
              Name of Recipe
              <input
                className='form-control'
                value={this.state.name}
                onChange={this.handleNameChange} />
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12'>
            <label>
              Your Images
              <input
                className='form-controle'
                type='file'
                onChange={this.handleFileUpload} />
            </label>
          </div>
        </div>

        <fieldset>
          <label className='col-xs-12'>Ingredients</label>
          {this.renderIngredientInputs()}
        </fieldset>

        <fieldset>
          <label className='col-xs-12'>Steps</label>
          {this.renderStepInputs()}
        </fieldset>

        <button type='submit'>Submit</button>
      </form>
    );
  },
});
