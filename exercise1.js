
// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies((movies) => {
//         console.log('Top movies: ', movies);
//         sendEmail(customer.email, movies, () => {
//           console.log('Email sent...')
//         });
//       });
//     }
//   });

getCustomer(1)
    .then(customer => {
        if(customer.isGold) getTopMovies()
            .then(movies => sendEmail(customer.email,movies))
    }).catch(err => console.log(err.message));

    /*async function notifyCustomer() {
        const customer = await getCustomer(1);
        console.log('Customers: ', customer);
        if (customer.isGold) {
            const movies = await getTopMovies();
            console.log('Movies: ', movies);
            await sendEmail(customer.email, movies);
            console.log('Email sent');
        }
    }
    notifyCustomer*/
function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting Customer');
            resolve({
                id: 1,
                name: 'Tarun Chawla',
                isGold: true,
                email: 'email'
            })
        }, 4000);
    })
}

function getTopMovies(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting movies');
            resolve(['movie1', 'movie2']);
        }, 4000);
    })
}

function sendEmail(email, movies, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Sending mail');
            resolve();
        }, 4000);
    });
}