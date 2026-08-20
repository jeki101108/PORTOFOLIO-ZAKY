const express = require("express");
const router = express.Router();

router.get("/api/hero", (req, res) => {
  res.json({
    nama: "Muhammad zaky alkhaer ahmad",
    peran: "Fullstack Web Developer",
    deskripsi: "Saya adalah siswa XII RPL 1 yang sedang belajar membuat aplikasi web menggunakan Express.js dan Next.js", // teks terpotong di screenshot asli, lengkapi sendiri
  });
});

module.exports = router;