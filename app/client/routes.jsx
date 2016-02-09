const {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} = ReactRouter;

const Handler = React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route name='root' component={App} path='/'>
          <IndexRoute component={RecipeListPage} />
          <Route path='/new' component={NewRecipePage} />
          <Route path='/recipe/:id' component={DisplayRecipePage} />
        </Route>
      </Router>
    );
  },
});

Meteor.startup(() => {
  ReactDOM.render(<Handler/>, document.getElementById('render-target'));
});
