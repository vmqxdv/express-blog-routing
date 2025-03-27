const express = require('express');
const router = express.Router();
const postsData = require('../utils/posts');


router.get('/', (_, res) => {
  res.json(postsData);
});

router.post('/', function (req, res) {
  res.send('Aggiunto nuovo dolce: ' + req.params.id);
});

router.put('/:id', function (req, res) {
  res.send('[PUT] Modificato dolce: ' + req.params.id);
});

router.patch('/:id', function (req, res) {
  res.send('[PATCH] Modificato il dolce: ' + req.params.id);
});

router.delete('/:id', function (req, res) {
  res.send('Eliminato il dolce: ' + req.params.id);
});


module.exports = router;