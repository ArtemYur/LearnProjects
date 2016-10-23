var defaultState = {};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length) ; i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function undoable(reducer) {

    var initialState = {
        past: [],
        present: reducer(undefined, {}),
        future: [],
        canUndo: false,
        canRedo: false,
        currentInput: ''
    };

    return function (state, action) {
        state = arguments.length > 0 && arguments[0] ? arguments[0] : initialState;
        var past = state.past, present = state.present, future = state.future;

        switch (action.type) {

            case actionTypes.UNDO:
                var previous = past[past.length - 1];
                var newPast = past.slice(0, past.length - 1);
                var calculatedObj = {
                    past: newPast,
                    present: previous,
                    future: [present].concat(_toConsumableArray(future)),
                    currentInput: previous
                };
                return Object.assign({}, state, calculatedObj);

            case actionTypes.REDO:
                var next = future[0];
                var newFuture = future.slice(1);
                var calculatedObj = {
                    past: [].concat(_toConsumableArray(past), [present]),
                    present: next,
                    future: newFuture,
                    currentInput: next
                };
                return Object.assign({}, state, calculatedObj);
                
            case actionTypes.REFRESH_INPUT_TAG:
                return Object.assign({}, state, { currentInput: action.tag });

            default:
                // Delegate handling the action to the passed reducer
                var newPresent = reducer(present, action);
                if (present === newPresent) {
                    return state;
                }
                var calculatedObj = {
                    past: [].concat(_toConsumableArray(past), [present]),
                    present: newPresent,
                    future: [],
                    currentInput: newPresent
                };
                return Object.assign({}, state, calculatedObj);
        }
    };
}

function searchTag(state, action) {
    state = arguments.length > 0 && arguments[0] ? arguments[0] : '';
    switch (action.type) {
        case actionTypes.APPLY_NEW_TAG:
            return action.tag;
            break;
        default:
            return state;
    }
}
searchTag = undoable(searchTag);


function searchResult(state, action) {
    switch (action.type) {
        case actionTypes.APPLY_GEO_OBJECT:
            return action.data;
            break;
        default:
            return state;
    }
}


function setWatchedLinks(state, action) {
    const NUMBER_OF_WL = 6;
    state = arguments.length > 0 && arguments[0] ? arguments[0] : [];
    switch (action.type) {
        case actionTypes.UPDATE_WL:
            var newArr = _toConsumableArray(state);
            if (newArr.indexOf(action.tag) === -1) {
                newArr.unshift(action.tag);
                if (newArr.length > NUMBER_OF_WL) {
                    newArr.pop();
                }
                window.localStorage.setItem(StorageNames.WATCHED_LINKS, JSON.stringify(newArr));
                return newArr;
            }
            
    }
    return state;
}


function setAutocoplete(state, action) {
    state = arguments.length > 0 && arguments[0] ? arguments[0] : [];
    switch (action.type) {
        case actionTypes.APPLY_AUTOCOMPLETE:
            return action.data;
    }
    return [];
}


function app(state, action) {

    switch (action.type) {
        case actionTypes.LOAD_STATE:
            return Object.assign({}, action.state);
    }

    var state = arguments.length > 0 && arguments[0] ? arguments[0] : defaultState;
    return {
        searchResult: searchResult(state.searchResult, action),
        searchTag: searchTag(state.searchTag, action),
        watchedLinks: setWatchedLinks(state.watchedLinks, action),
        autocomplete: setAutocoplete(state.autocomplete, action)
    }
}
