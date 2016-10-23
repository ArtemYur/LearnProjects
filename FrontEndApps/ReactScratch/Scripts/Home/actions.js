﻿var actionTypes = {
    APPLY_GEO_OBJECT: "APPLY_GEO_OBJECT",
    UNDO: "UNDO",
    REDO: "REDO",
    APPLY_NEW_TAG: "APPLY_NEW_TAG",
    UPDATE_WL: "UPDATE_WL",
    REFRESH_INPUT_TAG: "REFRESH_INPUT_TAG",
    LOAD_STATE: "LOAD_STATE",
    APPLY_AUTOCOMPLETE: "APPLY_AUTOCOMPLETE"
};

function applyGeoObject(data) {
    return {
        type: actionTypes.APPLY_GEO_OBJECT,
        data: data
    }
}

function applyNewTag(tag) {
    return {
        type: actionTypes.APPLY_NEW_TAG,
        tag: tag
    }
}

function undo() {
    return {
        type: actionTypes.UNDO
    }
}

function redo() {
    return {
        type: actionTypes.REDO
    }
}

function refreshInputTag(value) {
    return {
        type: actionTypes.REFRESH_INPUT_TAG,
        tag: value
    }
}

function updateWatchedLinks(tag) {
    return {
        type: actionTypes.UPDATE_WL,
        tag: tag
    }
}

function loadState(state) {
    return {
        type: actionTypes.LOAD_STATE,
        state: state
    }
}

function applyAutocoplete(data) {
    return {
        type: actionTypes.APPLY_AUTOCOMPLETE,
        data: data
    }
}


function executeSearch(tag) {
    return function (dispatch) {
        dispatch(applyNewTag(tag));
        $.ajax({
            url: "search",
            type: "GET",
            data: "tag=" + tag,
            success: function (data) {
                dispatch(applyGeoObject(data));
                if (data.name) {
                    dispatch(updateWatchedLinks(data.name));
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("ERROR CALLING WEBSERVICE ", jqXHR);
                console.log("Status code: ", textStatus);
                console.log("Message: ", errorThrown);
            }
        });
    }
}

function searchByTag(tag) {
    return function (dispatch) {
        $.ajax({
            url: "search/autocompletion",
            type: "GET",
            data: "tag=" + tag,
            success: function (data) {
                dispatch(applyAutocoplete(data));
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("ERROR CALLING WEBSERVICE ", jqXHR);
                console.log("Status code: ", textStatus);
                console.log("Message: ", errorThrown);
            }
        });
    }
}

function applyPresentToSearchResult() {
    var state = store.getState();
    return executeSearch(state.searchTag.present);
}
