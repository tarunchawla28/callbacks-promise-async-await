console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(username){
    console.log('Getting repositories');
    getRepositories(username,getCommits);
}

function getCommits(repositories){
    console.log(repositories);
    getCommits(repositories,displayCommits);             
}

function displayCommits(commits){
    console.log(commits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database');
        callback({ id: id, gitHubUsername: 'tarun' });
    }, 2000); 
}

function getRepositories(username,callback) {
    setTimeout(()=>{
        callback(['repo1', 'repo2', 'repo3']);
    },2000)
}


