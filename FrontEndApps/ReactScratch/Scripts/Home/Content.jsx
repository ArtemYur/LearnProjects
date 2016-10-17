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

var SearchResultMapped = ReactRedux.connect(mapStateToProps, null)(SearchResult);
var ReferencesPanelMapped = ReactRedux.connect(mapStateToProps, null)(ReferencesPanel)

var mountNode = document.getElementById("root");

ReactDOM.render(<Content />, mountNode);
