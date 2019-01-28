var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sample', function(req, res, next) {
    res.render('sample', { title: 'Express' });
});


router.get('/profile', function(req, res, next) {
    res.render('profile', { title: 'Profile Page' });
});


router.get('/newUser', function(req, res, next) {
    res.render('newUser', { title: 'Create User Page' });
});


router.get('/visualization', function(req, res, next) {
    res.render('visualization', { title: 'User Visualizations' });
});



module.exports = router;
