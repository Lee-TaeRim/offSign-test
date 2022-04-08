'use strict';

const express = require('express');
const offline = require("./offline");

const router = express.Router();

router.get("/", offline.home);

module.exports = router;
