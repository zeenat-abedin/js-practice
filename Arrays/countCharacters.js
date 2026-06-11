// BangaLorE is@Garden_CITYwithGoodweather
// Count the number of uppercase, lowercase, special, spaces

function countCharcters(str) {
    let uppercase = 0;
    let lowercase = 0;
    let spaces = 0;
    let special = 0;

    for (const el of str) {
       if (el >= 'A' && el <= 'Z') {
        uppercase++
       } else if(el >= 'a' && el <= 'z'){
        lowercase++
       } else if( el === " "){
        spaces++
       } else {
        special++
       }
    }
    return {uppercase, lowercase, spaces, special}
}

console.log(countCharcters('BangaLorE is@Garden_CITYwithGoodweather'))