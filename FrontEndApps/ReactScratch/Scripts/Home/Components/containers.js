var mapDispatchToProps = function (dispatch) {
    return {
        onClickSearch: function onClickSearch(id) {
            dispatch(executeSearch(id));
        }
    };
};

var mapStateToProps = function (state) {
    return {
        searchResult: state.searchResult  
    }
}

var SearchInputDispatched = ReactRedux.connect(null, mapDispatchToProps)(SearchInput);
var LinkDispatched = ReactRedux.connect(null, mapDispatchToProps)(Link);

var SearchResultMapped = ReactRedux.connect(mapStateToProps, null)(SearchResult);
var ReferencesPanelMapped = ReactRedux.connect(mapStateToProps, null)(ReferencesPanel);