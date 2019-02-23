const bcrypt = require('bcrypt');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(10,(err,salt)=>{
//     if(err) return next(err);
    
//     bcrypt.hash('password123',salt,(err,hash)=>{
//         if(err) return next(err);
//         console.log(hash)
//     })
//     //console.log(salt)
// })

// const secret = 'mysecretpassword';
// const secretSalt = 'sdsadadasdgvfgdgd';

// const user = {
//     id: 1,
//     token: MD5('abc1233').toString() + secretSalt
// }

// console.log(user)

const id = '1000';
const secret = 'supersecret';

const recivedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y';

const token = jwt.sign(id,secret);
const decodeToken = jwt.verify(recivedToken,secret);

console.log(decodeToken);