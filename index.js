console.log("Halo, Node.js jalan!");
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '180609', // isi kalau ada password
  database: 'nama_database'
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Gagal konek ke MariaDB:', err.message);
    return;
  }
  console.log('✅ Berhasil konek ke MariaDB');
});
