var mapDispatchToSearchInput = function (dispatch) {
    return {
        onClick: function (tag) {
            dispatch(executeSearch(tag));
        },
        onChange: function (value) {
            dispatch(refreshInputTag(value));
        },
        executeAutocomplete: function (value) {
            dispatch(refreshInputTag(value));
            dispatch(searchByTag(value));
        }
    };
}
var mapStateToPropsSearchInput = function (state) {
    return {
        searchTag: state.searchTag.currentInput,
        autocomplete: state.autocomplete
    }
}
var SearchInputDispatched = ReactRedux.connect(mapStateToPropsSearchInput, mapDispatchToSearchInput)(SearchInput);


var mapDispatchToLink = function (dispatch) {
    return {
        onClick: function (tag) {
            dispatch(applyNewTag(tag));
            dispatch(executeSearch(tag));
        }
    }
}
var LinkDispatched = ReactRedux.connect(null, mapDispatchToLink)(Link);


var mapStateToProps = function (state) {
    return {
        searchResult: state.searchResult
    }
}
var SearchResultMapped = ReactRedux.connect(mapStateToProps, null)(SearchResult);
var ReferencesPanelMapped = ReactRedux.connect(mapStateToProps, null)(ReferencesPanel);


function mapDispatchToControlsSection(dispatch) { 
    return { 
        onClickUndo: function () {
            dispatch(undo());
            dispatch(applyPresentToSearchResult());
        },
        onClickRedo: function () {
            dispatch(redo());
            dispatch(applyPresentToSearchResult());
        },
        onClickSave: function () {
            var state = store.getState();
            window.localStorage.setItem(StorageNames.PREVIOUS_STATE, JSON.stringify(state));
        },
        onClickOpen: function () {
            var state = window.localStorage.getItem(StorageNames.PREVIOUS_STATE);
            if (state) {
                dispatch(loadState(JSON.parse(state)));
            }            
        },
        onClickRemove: function () {
            window.localStorage.getItem(StorageNames.PREVIOUS_STATE, '');
        }
    } 
}
function mapStateToControlsSection(state) {
    return {
        canUndo: state.searchTag.past.length > 0,
        canRedo: state.searchTag.future.length > 0
    }
}
var ControlsSectionDispatched = ReactRedux.connect(mapStateToControlsSection, mapDispatchToControlsSection)(ControlsSection);


function mapStateToWatchedLinks(state) {
    return {
        watchedLinks: state.watchedLinks
    }
}
var WatchedLinksMapped = ReactRedux.connect(mapStateToWatchedLinks, null)(WatchedLinks);

