let json = require('jsonfile');

let git = require('simple-git');

const PATH = "./date.json";

const date = new Date();

let writeFile = {
    Date : date,
    Description: "Learning AWS hence cannot able to contribute in GIT"
}

json.writeFile(PATH,writeFile);


git().add(PATH).commit("Daily Updates"+date,{"--date":date}).push();


