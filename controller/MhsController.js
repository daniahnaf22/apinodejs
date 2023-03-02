"use strict";

var response = require("../res");
var connection = require("../koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi RESTAPI berjalan", res);
};

//menampilkan data
exports.tampilkanMhs = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (err, rows, fileds) {
    if (err) {
      console.log(err);
    } else {
      response.ok(rows, res);
    }
  });
};

//nemapilkan data mhs by id
exports.tampilkanMhsById = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mhs = ?",
    [id],
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menambahkan data mahasiswa
exports.tambahkanMhs = function (req, res) {
  var nama = req.body.nama;
  var nim = req.body.nim;
  var jurusan = req.body.jurusan;

  connection.query(
    "INSERT INTO mahasiswa (nama,nim,jurusan) VALUES(?,?,?)",
    [nama, nim, jurusan],
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        response.ok("Berhasil menambahkan Data", res);
      }
    }
  );
};

// mengubah data mahasiswa by id
exports.ubahMhs = function (req, res) {
  var id = req.body.id_mhs;
  var nama = req.body.nama;
  var nim = req.body.nim;
  var jurusan = req.body.jurusan;

  connection.query(
    "UPDATE mahasiswa SET nama=?, nim=?, jurusan=? WHERE id_mhs=?",
    [nama, nim, jurusan, id],
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        response.ok("Berhasil Ubah Data", res);
      } 
    });
};


// menghapus data berdasarkan id
exports.hapusMhs = function(req, res) {
    var id = req.body.id_mhs;
    connection.query("DELETE FROM mahasiswa WHERE id_mhs=?",[id],
    function (err, rows, fields) {
        if (err) {
          console.log(err);
        } else {
          response.ok("Berhasil Hapus Data", res);
        }
      });
}

//menampilkan matakuliah group
exports.tampilkanMakul = function(req, res) {
    connection.query('SELECT mahasiswa.id_mhs, mahasiswa.nama, mahasiswa.nim, mahasiswa.jurusan,matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_makul = matakuliah.id_makul AND krs.id_mhs = mahasiswa.id_mhs ORDER BY mahasiswa.id_mhs',
        function (err, rows, fields){
            if (err) {
                console.log(err);
              } else {
                response.oknested(rows, res);
              }
        })
};