var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');


//daftar menu registrasi
router.post('/api/v1/register', auth.register);
router.post('/api/v1/login', auth.login);

//alamat yang perlu di otorisasi
router.get('/api/v1/secret', verifikasi(), auth.halamanSecret);

module.exports = router;