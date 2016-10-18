var Content = React.createClass({
    render: function () {
        return (
            <ReactRedux.Provider store={store}>
              <div id="content" className="content">
                <Jumbotron />
                <SearchResultMapped />
              </div>
            </ReactRedux.Provider>
      );
    }
});

var mountNode = document.getElementById("root");
ReactDOM.render(<Content />, mountNode);
