var StorageNames = {
    PREVIOUS_STATE: "PREVIOUS_STATE",
    WATCHED_LINKS: "WATCHED_LINKS"
}

var preloadedState = {};

var watchedLinkes = window.localStorage.getItem(StorageNames.WATCHED_LINKS);
preloadedState.watchedLinks = watchedLinkes ? JSON.parse(watchedLinkes) : [];

var store = Redux.createStore(app, preloadedState, Redux.applyMiddleware(ReduxThunk.default));

var mountNode = document.getElementById("root");
ReactDOM.render(
            <ReactRedux.Provider store={store}>
                <Content />
            </ReactRedux.Provider>
            , mountNode);
