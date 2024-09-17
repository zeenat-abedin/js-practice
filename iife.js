//Named IIFE
(function chai() {
    console.log('DB connected')
})();

// anonymous IIFE
( (name) => {
    console.log(`DB connected to ${name}`);
} )('john')
