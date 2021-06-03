require('es6-promise');
var promise = new Promise(function (fulfill,reject) {
    setTimeout(function () {
        reject(new Error('REJECTED!'));
    }, 300);
});

function onReject(error) {
    console.log(error.message);
}

promise.then(
    function (value) { },
    function (error) {
        onReject(error);
    }
);

// official solution proposes: 
// promise.then(null, onReject);
