const express = require('express');
const router = express.Router();
const io = require('socket.io').listen(3001);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/query', (req, res) => {
  if(req.query.data !== undefined) {
    io.emit('result', req.query.data);
    res.send(req.query.data)
  }
});

router.get('/test', (req, res) => {
  res.render('test', {title : 'Test', io : io});
});

module.exports = router;
