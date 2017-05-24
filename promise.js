// let aPromise = new Promise((resolve, reject) => {
//     resolve('Connected to server !');
//     reject('Cannot connect to server !');
// });

// aPromise.then(
//     msg => console.log('Run: ' + msg),
//     err => console.log(err + '')
// );

let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('Phép cộng: Lỗi kiểu số !!!'));
            }
            resolve(a + b);
        }, 10);
    });
}

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('Phép nhân: Lỗi kiểu số !!!'));
            }
            resolve(a * b);
        }, 10);
    });
}

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('Phép chia: Lỗi kiểu số !!!'));
            }
            if (b === 0) return reject(new Error('Phép chia: Lỗi chia cho 0 !!!'));
            resolve(a / b);
        }, 10);
    });
}

let tinhDienTichHinhThang = (a, b, h) => {
    add(a, b)
        .then(plus => multiply(plus, h))
        .then(resplus => divide(resplus, 2))
        .then(square => console.log('Dien tich hinh thang ' + square))
        .catch(err => console.log(err + ''))
}

tinhDienTichHinhThang(6, 2, 9);


// let tinhDienTichHinhThang = (a, b, h) => {
//     add(a, b, (err, result) => {
//         if (err) return cb(err);
//         multiply(result, h, (err, result) => {
//             if (err) return cb(err);
//             divide(result, 2, (err, result) => {
//                 if (err) return cb(err);
//                 cb(undefined, result);
//             });
//         });
//     });
// }

