const pbkdf2 = require('pbkdf2');
const crypto = require('crypto');

let password = "some user password";
// console.log(password);
//random chars (20)
let salt = crypto.randomBytes(20).toString('hex');

// console.log(salt)

let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 2256, 'sha256');

// console.log(key);

let hash = key.toString('hex');

// console.log(hash);

let stored_pass = `pbkdf2_sha256$3600$${salt}$${hash}$`

let pass_parts = stored_pass.split('$');

// console.log(pass_parts);

let newPassword = "some user password";

let keyNewLogin = pbkdf2.pbkdf2Sync(
    newPassword,
    pass_parts[2],
    parseInt(pass_parts[1]),
    256,
    'sha256'
);

// console.log(keyNewLogin);

let hashNewLogin = keyNewLogin.toString('hex');

if(hashNewLogin === pass_parts[3]){
    console.log('Password match');
}
else{
    console.log(`password doesn't match account. retry or reset password.`)
}