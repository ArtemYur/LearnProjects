var defaultState = {};

function app(state, action) {
    var state = arguments.length > 0 && arguments[0] ? arguments[0] : defaultState;
    if (action) {
        switch (action.type) {
            case actionTypes.APPLY_GEO_OBJECT:
                return Object.assign({}, state, { searchResult: action.data });
                break;

            default:
                return state;
        }
    } else {
        return state;
    }
}
