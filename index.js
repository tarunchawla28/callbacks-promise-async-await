console.log('Before');
getUser(1, function (user) {
    console.log(user);
    console.log('Getting repositories');
    getRepositories(user,(repositories)=>{
        console.log(repositories);
        getCommits(repositories,(commits)=>{
            
        });       
    });
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Readng a user from a database');
        callback({ id: id, gitHubUsername: 'tarun' });
    }, 2000);
}
function getRepositories(username,callback) {
    setTimeout(()=>{
        callback(['repo1', 'repo2', 'repo3']);
    },2000)
}