

export function getList() {
    const URL = "http://localhost:3333/list";
    return fetch(URL).then(data => data.json());
}