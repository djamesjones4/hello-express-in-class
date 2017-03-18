const express = require('express');
const router = express.Router();

router.post('/cupcakes', (req, res) => {
  res.render('index', { message: "Yum!!" });
});

router.get('/cookies', (req, res) => {
  res.render('index', { message: 'Love chocolate chip' });
});

module.exports = router;
