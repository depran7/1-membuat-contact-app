const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

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

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);

  //cek duplikat
  const duplikat = contacts.find(e => e.nama === contact.nama);

  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("Contact sudah terdaftar gunakan nama lain!")
    );
    return false;
  }

  // cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email Tidak Valid!"));
      return false;
    }
  }

  if (!validator.isMobilePhone(noHP, 'id-ID')) {
    console.log(chalk.red.inverse.bold("Nomor HP Tidak Valid!"));
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log(chalk.green.inverse.bold(`Terimakasih ${nama} sudah memasukkan data`));
};

module.exports = {
  simpanContact
};
