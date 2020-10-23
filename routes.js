const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: "Home"});
    // res.render('index')
});



module.exports = router;
