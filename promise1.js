console.log('Before');
/*getUser(1, function (user) {
    console.log(user);
    console.log('Getting repositories');
    getRepositories(user, (repositories) => {
        console.log(repositories);
        console.log('Getting commits');
        getCommits(repositories[0], (commits) => {
            console.log(commits);
        });
    });
});*/
/*const p = getUser(1);
p.then(user => console.log(user));*/
getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repositories => getCommits(repositories[0]))
    .then(commits => console.log(commits))
    .catch(err => console.log('Error: ', err.message));
console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Readng a user from a database');
            resolve({ id: id, gitHubUsername: 'tarun' });
        }, 2000);
    });

}
function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000)
    })
}
function getCommits(repository) {
    return new Promise((resolve, reject) => {
        console.log('Calling Github API');
        setTimeout(() => {
            resolve(100);
        }, 2000)
    })

}