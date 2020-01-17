

async function getFromApi(link, data, method, isBearer = false, navigation = null) {
    let body = null;
    if (data) {
        body = JSON.stringify(data);
    }

    let oAuth = null;
    let token = null;
    if (isBearer) {
        oAuth = await _getOAuth();
        if (oAuth) {
            token = "Bearer " + oAuth.access_token;
        }
    }
    // console.log(link);`

    return fetch(link, {
        method: method,
        headers: {
            // Accept: 'application/json',
            // 'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: token,
        },
        body: body,
    }).then(function (response) {
            // console.log(response.headers);
            // console.log(response.type);
            let status = response.status;
            return response.json().then((obj) => {
                return obj;
                // return {
                //     status: status,
                //     body: obj
                // };
            });
        })
        .catch((error) => {
            console.log("ERROR");
            console.error(error);
        });
}

export function apiPost(link, data, isBearer, navigation) {
    return getFromApi(link, data, "POST", isBearer, navigation);
}

export function apiPatch(link, data, isBearer, navigation) {
    return getFromApi(link, data, "PATCH", isBearer, navigation);
}

export function apiDelete(link, data, isBearer, navigation) {
    return getFromApi(link, data, "DELETE", isBearer, navigation);
}

export function apiGet(link, isBearer, navigation) {
    return getFromApi(link, null, "GET", isBearer, navigation);
}
