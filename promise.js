const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve(1);
        reject(new Error('message'));
    }, 2000);
});
p
    .then(result => console.log('Result is: ' + result))
    .catch(err => console.log('Error is: ' + err.message));