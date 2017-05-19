let square = (a, b, h) => (a + b) * h / 2;


//console.log('Dien tich: ' + square(2, 3, 2));

let add = (a, b, cb) => {
    setTimeout(() => {
        let err, result;
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Phép cộng: Lỗi kiểu số !!!'));
        }
        cb(undefined, a + b);
    }, 10);
}

let multiply = (a, b, cb) => {
    setTimeout(() => {
        let err, result;
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Phép nhân: Lỗi kiểu số !!!'));
        }
        cb(undefined, a * b);
    }, 10);
}

let divide = (a, b, cb) => {
    setTimeout(() => {
        let err, result;
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Phép chia: Lỗi kiểu số !!!'));
        }
        cb(undefined, a / b);
    }, 10);
}

let tinhDienTichHinhThang = (a, b, h, cb) => {
    add(a, b, (err, result) => {
        if (err) return cb(err);
        multiply(result, h, (err, result) => {
            if (err) return cb(err);
            divide(result, 2, (err, result) => {
                if (err) return cb(err);
                cb(undefined, result);
            });
        });
    });
}

tinhDienTichHinhThang(2, 3, 2, (err, result) => {
    if (err) console.log(err + '');
    console.log('Diện tích hình thang: ' + result);
});

// add(4, 5, (err, result) => {
//     if (err) return console.log('Loi: ' + err);
//     console.log('Ket qua: ' + result);
// });
