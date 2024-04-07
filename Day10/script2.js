//callback

function main(a,b,callback) {
    let c = a + b
    callback(c)
}

function callback(d) {
    console.log(d)
}

main(2,3,callback);  