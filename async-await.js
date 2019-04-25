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

console.log('After');
async function displayCommits(){
    const user=await getUser(1);
    const repositories=await getRepositories(user.gitHubUsername);
    const commits=await getCommits(repositories[0]);
    console.log(commits);
}
displayCommits();
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