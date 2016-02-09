IngredientRow = React.createClass({
  render() {
    const onChange = this.props.onChange;
    const that = this.props.that;

    return (
      <div className='col-xs-12'>
        <div className='ingredient-row' key={this.props.key}>
          <input
            className='form-control col-xs-6 col-md-2'
            type='number'
            value={this.props.ingredient.amount}
            onChange={onChange.bind(that, 'amount')} />
          <select
            className='form-control col-xs-6 col-md-2'
            value={this.props.ingredient.unit}
            onChange={onChange.bind(that, 'unit')}>
            <option value='gr'>gram</option>
            <option value='tbsp'>Tbsp</option>
          </select>
          <input
            className='form-control col-xs-12 col-md-8'
            type='text'
            value={this.props.ingredient.ingredient}
            onChange={onChange.bind(that, 'ingredient')} />
        </div>
      </div>
    );
  }
})
