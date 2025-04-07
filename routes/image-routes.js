const express = require('express')

const authmiddleware= require('../middleware/auth-middleware') ;
const adminmiddleware= require('../middleware/admin-middleware');
const uploadmiddleware = require('../middleware/upload-middleware');
const {uploadImage, fetchImages} = require('../controller/Image-controller');

const router = express.Router();

router.post('/upload',authmiddleware, adminmiddleware,uploadmiddleware.single('image'), uploadImage )
router.get('/get', authmiddleware, fetchImages)

module.exports = router ; 