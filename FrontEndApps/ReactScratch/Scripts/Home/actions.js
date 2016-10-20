var actionTypes = {
    FIND_GEO_OBJECT: "FIND_GEO_OBJECT",
    APPLY_GEO_OBJECT: "APPLY_GEO_OBJECT"
}

function applyGeoObject(data) {
    return {
        type: actionTypes.APPLY_GEO_OBJECT,
        data: data
    }
}

function executeSearch(tag) {

    return function (dispatch) {
        $.ajax({
            url: "search",
            type: "GET",
            data: "tag=" + tag,
            success: function (data) {
                dispatch(applyGeoObject(data));
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("ERROR CALLING WEBSERVICE ", jqXHR);
                console.log("Status code: ", textStatus);
                console.log("Message: ", errorThrown);
            }
        });
    }
}
