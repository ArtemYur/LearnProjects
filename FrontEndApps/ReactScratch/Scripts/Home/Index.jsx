var preloadedState = null;

var store = Redux.createStore(app, preloadedState, Redux.applyMiddleware(ReduxThunk.default));

var mountNode = document.getElementById("root");
ReactDOM.render(
            <ReactRedux.Provider store={store}>
              <Content />
            </ReactRedux.Provider>
            , mountNode);
