// FileSystem
const fs = require("fs");

// Synchronous
// try{
//   fs.writeFileSync('data/test.txt', 'Hello World!');
// } catch(e){
//   console.log(e)
// }

// Asynchronous
// fs.writeFile('data/test.txt', 'Hello World secara Asynchronous', (e) => {
//   console.log(e);
// })

// const data = fs.readFileSync('data/test.txt', 'utf-8');
// fs.readFile('data/test.txt', 'utf-8', (e, data)=> {
//   if(e) throw e;
//   console.log(data);
// });

// Readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan nama anda : ", nama => {
  rl.question("Masukkan nomor hp anda : ", noHP => {
    const contact = {nama, noHP};
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);

    contacts.push(contact);
    console.log(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    
    // console.log(`Terimakasih ${nama} sudah input ${noHP}`)
    rl.close();
  });
});
