var express = require('express');
var mongodb = require('./src/config/db');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json({ data: 'Hello Docker' })
  // mongodb.getVal(res);
});

router.post('/values', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var val = req.body.value;

  if (val === undefined || val === "") {
    res.send(JSON.stringify({status: "error", value: "Value undefined"}));
    return
  }
  mongodb.sendVal(val, res);
});

router.delete('/values/:id', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var uuid = req.params.id;

  if (uuid === undefined || uuid === "") {
    res.send(JSON.stringify({status: "error", value: "UUID undefined"}));
    return
  }
  mongodb.delVal(uuid);
  res.send(JSON.stringify({status: "ok", value: uuid}));
});



// router.get('/user', (req, res) => {
//   User.find().then((user) => {
//       res.send({ user });
//   }, (e) => {
//       res.status(400).send(e);
//   });
// });




module.exports = router;