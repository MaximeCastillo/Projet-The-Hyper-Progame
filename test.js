let myHash = `#pagelist/page_size=9&page=1&dates=2021-01-01,2021-12-31&ordering=-rating`
let myUrl = 'https://api.rawg.io/api/games?page=1&page_size=9&search&platforms=4,5&stores=5,6&developers=valve-software&publishers=electronic-arts&genres=action,indie&tags=singleplayer,multiplayer&creators=cris-velasco,mike-morasky&dates=2021-01-01,2021-12-31&ordering=-rating'


let path = myHash.substring(1).split("/");
console.log(path);

let queriesString = path[1];
console.log(queriesString);

let query = queriesString.split("&");
console.log(query);

///////////////////////////////////////////////////////////////

const defaultQueryParameters = {
    'page': null,
    'page_size': null,
    'search': null,
    'platforms': null,
    'stores': null,
    'developers': null,
    'publishers': null,
    'genres': null,
    'tags': null,
    'creators': null,
    'dates': null,
    'ordering': null
}

////////////////////////////////////////////////////////////////

let queryParameters =  {
    'page': 1,
    'page_size': 9,
    'search': null,
    'platforms': null,
    'stores': null,
    'developers': null,
    'publishers': null,
    'genres': null,
    'tags': null,
    'creators': null,
    'dates': "2021-01-01,2021-12-31",
    'ordering': "-rating"
}

const url = "https://api.rawg.io/api/games";

const makeUrl = (queryParameters) => {
    let parametersString = "";
    for (const [key, value] of Object.entries(queryParameters)) {
        if (value != null) {
            parametersString += "&" + key + "=" + value;
        }
    }
    parametersString = parametersString.substring(1);
    return finalURL = url + "?" + parametersString;
}

console.log(finalURL);
