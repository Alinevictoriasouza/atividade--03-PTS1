var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('noticias/index', { title: 'Express' });
});

router.get('/noticia1', function(req, res, next) {
  res.render('noticias/noticia1', { title: 'Express' });
});

router.get('/noticia2', function(req, res, next) {
  res.render('noticias/noticia2', { title: 'Express' });
});

router.get('/noticia3', function(req, res, next) {
  res.render('noticias/noticia3', { title: 'Express' });
});

router.get('/noticia4', function(req, res, next) {
  res.render('noticias/noticia4', { title: 'Express' });
});


module.exports = router;
