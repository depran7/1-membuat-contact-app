const { pertanyaan, simpanContact } = require("./contacts");

const main = async () => {
  const nama = await pertanyaan("Masukkan Nama Anda: ");
  const email = await pertanyaan("Masukkan Email Anda: ");
  const noHP = await pertanyaan("Masukkan No HP Anda: ");
  simpanContact(nama, email, noHP);
};

main();
