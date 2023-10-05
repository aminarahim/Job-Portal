const express=require('express');
const { show } = require('../controllers/authController');
const router=express.Router();

router.get('/api',show)

module.exports=router;