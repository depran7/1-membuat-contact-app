const contacts = require("./contacts");

const yargs = require("yargs");
// menambahkan data
yargs
  .command({
    command: "add",
    describe: "Menambahkan Contact Baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string"
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string"
      },
      noHP: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string"
      }
    },
    handler(argv) {
      contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    }
  })
  .demandCommand();

//Menampilkan daftar semua contact nama & no HP
yargs.command({
  command: "list",
  describe: "Menampilkan daftar semua contact nama & no HP",
  handler() {
    contacts.listContact();
  }
});

//Menampilkan detail sebuah contact
yargs.command({
  command: "detail",
  describe: "Menampilkan detail sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  }
});

//Menghapus sebuah contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  }
});

yargs.parse();
