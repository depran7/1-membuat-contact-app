// FileSystem
const fs = require("fs");

// Readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// membuat folder data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada
const dataPath = dirPath + "/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const pertanyaan = pertanyaan => {
  // resolve ketika fulfid atau selesai
  // reject ketika gagal
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, val => {
      resolve(val);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log(`Terimakasih ${nama} sudah memasukkan data`);
  rl.close();
};


module.exports = {
  pertanyaan,
  simpanContact
}