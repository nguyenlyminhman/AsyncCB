const fs = require('fs');

let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('Số phải là kiểu number !'));
            }
            resolve(a + b);
        }, 1000);
    });
}

// add(4, 5)
//     .then(res => console.log(res), err => console.log(err + ''));

// let promiseReadFile = new Promise((resolve, reject) => {
//     fs.readFile('b.txt', 'utf8', (err, data) => {
//         if (err) return reject(err);
//         resolve(data);
//     });
// });

// promiseReadFile.then(
//     data => console.log(data),
//     err => console.log(err + '')
// );

let promiseReadAnyFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
};

promiseReadAnyFile('a.txt')
    .then(
    data => console.log(data),
    err => console.log(err + '')
    );
