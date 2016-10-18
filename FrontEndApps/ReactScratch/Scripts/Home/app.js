var actionTypes = {
    FIND_GEO_OBJECT: "FIND_GEO_OBJECT",
    APPLY_GEO_OBJECT: "APPLY_GEO_OBJECT"
}

function findGeoObjectById(id) {
    return {
        type: actionTypes.FIND_GEO_OBJECT,
        id: id
    };
}

var applyGeoObject = function (data) {
    return {
        type: actionTypes.APPLY_GEO_OBJECT,
        data: data
    }
}

var mapDispatchToProps = function (dispatch) {
    return {
        onClickSearch: function onClickSearch(id) {
            dispatch(findGeoObjectById(id));
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


var defaultState = {}

function app(state, action) {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    if (action) {
        switch(action.type) {
            case actionTypes.FIND_GEO_OBJECT:
                $.ajax({
                    url: "search",
                    type: "GET",
                    data: "tag=" + action.id,
                    success: function (data) {
                        store.dispatch(applyGeoObject(data));
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log("ERROR CALLING WEBSERVICE ", jqXHR);
                        console.log("Status code: ", textStatus);
                        console.log("Message: ", errorThrown);
                    }
                });
                return state;
                break;

            case actionTypes.APPLY_GEO_OBJECT:
                return Object.assign({}, state, { searchResult: action.data});
                break;

            default: 
                return state;
        }
    } else {
        return state;
    }    
}

var store = Redux.createStore(app);





