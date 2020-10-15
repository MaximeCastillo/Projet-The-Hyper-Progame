let myHash = `#pagelist/page_size=9&page=1&dates=2021-01-01,2021-12-31&ordering=-rating`

let path = myHash.substring(1).split("/");
console.log(path);

let queriesString = path[1];
console.log(queriesString);

let query = queriesString.split("&");
console.log(query);

///////////////////////////////////////////////////////////////

let queryParameters = {
    'page': 1,
    'page_size': 9,
    'dates': "2021-01-01,2021-12-31",
    'ordering:': null
}
console.log(queryParameters);


let argument = "";

for (const [key, value] of Object.entries(queryParameters)) {
    if (value != null) {
        argument += "&" + key + "=" + value;
    }
}

let url = "https://api.rawg.io/api/games";
let finalURL = url + "?" + argument;