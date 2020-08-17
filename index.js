let json = require('jsonfile');
const { default: simpleGit } = require('simple-git');

let git = simpleGit();

const PATH = "./date.json";

const DATE = new Date();


function commit_date(date){
    let writeFile = {
        Date : date,
        Description: "Learning AWS hence cannot able to contribute in GIT"
    }

    json.writeFile(PATH,writeFile, () => {
        console.log(date);
        git.add([PATH])
        git.commit("Daily Updates",[PATH],['--date',date])
        git.push('origin', 'master');
    });  
}

function makeForDays(){
    for(let i=1;i<8;i++){
        let date = new Date(DATE - (i * 86400000));
        commit_date(date);
    }
}


makeForDays();
