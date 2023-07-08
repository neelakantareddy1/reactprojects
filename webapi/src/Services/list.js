

export function getList() {
    const URL = "http://localhost:3333/list";
    return fetch(URL).then(data => data.json());
}

export function additem (item) {
    const URL = "http://localhost:3333/list";
    return fetch(URL, {
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify({item})
    }).then(data => data.json());
}