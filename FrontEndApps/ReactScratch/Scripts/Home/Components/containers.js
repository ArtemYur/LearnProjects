var mapDispatchToSearchInput = function (dispatch) {
    return {
        onClick: function (tag, e) {
            dispatch(executeSearch(tag));
            if (e) {
                e.preventDefault();
            }            
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
        onClick: function (id, e) {
            dispatch(retrieveGeoObject(id));
            if (e) {
                e.preventDefault();
            }
        }
    }
}
var LinkDispatched = ReactRedux.connect(null, mapDispatchToLink)(Link);


function mapDispatchToFooterLink(dispatch) {
    return {
        onClick: function (tag) {
            dispatch(applyNewTag(tag));
            dispatch(executeSearch(tag));
        }
    }
}
var FooterLinkMapped = ReactRedux.connect(null, mapDispatchToFooterLink)(FooterLink);


function mapStateToSearchResult(state) {
    return {
        searchResult: state.searchResult
    }
}
function mapDispatchToSearchResult(dispatch) {
    return {
        onClick: function (id) {
            dispatch(retrieveGeoObject(id));
        }
    }
}
var SearchResultMapped = ReactRedux.connect(mapStateToSearchResult, mapDispatchToSearchResult)(SearchResult);


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
            window.localStorage.setItem(StorageNames.PREVIOUS_STATE, '');
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


function mapStateToGeoObject(state) {
    return {
        geoObject: state.geoObject
    }
}
var GeoObjectMapped = ReactRedux.connect(mapStateToGeoObject, null)(GeoObject);
var ReferencesPanelMapped = ReactRedux.connect(mapStateToGeoObject, null)(ReferencesPanel);


function mapStateToWatchedLinks(state) {
    return {
        watchedLinks: state.watchedLinks
    }
}
var WatchedLinksMapped = ReactRedux.connect(mapStateToWatchedLinks, null)(WatchedLinks);

