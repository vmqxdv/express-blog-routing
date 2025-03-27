const express = require('express');
const router = express.Router();
const postsData = require('../utils/posts');


router.get('/', (_, res) => {
  res.json(postsData);
});

module.exports = router;