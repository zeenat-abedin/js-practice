const GITHUB_API = 'https://api.github.com/users/zeenat-abedin'

const user = fetch(GITHUB_API)

console.log(user);

user.then((data)=> console.log(data));

