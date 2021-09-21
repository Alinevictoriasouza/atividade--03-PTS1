var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('noticias/index', { title: 'Express' });
});

router.get('/01', function(req, res, next) {
  res.render('noticias/noticia1', { title: 'Express' });
});

router.get('/02', function(req, res, next) {
  res.render('noticias/noticia2', { title: 'Express' });
});

router.get('/03', function(req, res, next) {
  res.render('noticias/noticia3', { title: 'Express' });
});

router.get('/04', function(req, res, next) {
  res.render('noticias/noticia4', { title: 'Express' });
});


module.exports = router;
