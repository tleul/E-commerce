const express = require('express');
const mongoose = require('mongoose');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');
const Products = require('../models/Products');

const router = express.Router();

//  PROFILE IMAGE STORING STARTS
// aws-sdk npm
const s3 = new aws.S3({
	accessKeyId: 'AKIAZMFRIIRS65IWRP7C',
	secretAccessKey: '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',
	Bucket: 'leulbucket',
});
// Single Upload
const profileImgUpload = multer({
	storage: multerS3({
		s3: s3,
		bucket: 'leulbucket',
		acl: 'public-read',
		key: function (req, file, cb) {
			cb(
				null,
				path.basename(
					file.originalname,
					path.extname(file.originalname),
				) +
					'-' +
					Date.now() +
					path.extname(file.originalname),
			);
		},
	}),
	limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	},
}).single('profileImage');
// * Check File Type
//  * @param file
//  * @param cb
//  * @return {*}
//  */
function checkFileType(file, cb) {
	// Allowed ext
	const filetypes = /jpeg|jpg|png|gif/;
	// Check ext
	const extname = filetypes.test(
		path.extname(file.originalname).toLowerCase(),
	);
	// Check mime
	const mimetype = filetypes.test(file.mimetype);
	if (mimetype && extname) {
		return cb(null, true);
	} else {
		cb('Error: Images Only!');
	}
}

//POST REQUEST iTEM details
router.post('/image', async (req, res) => {
	// const { itemdescription, itemnameunitprice, itemname } = req.body;
	const name = 'sutsomname';
	profileImgUpload(req, res, async (error) => {
		console.log('requestOkokok', req.file);
		console.log('error', error);
		if (error) {
			console.log('errors', error);
			res.json({ error: error });
		} else {
			// If File not found
			if (req.file === undefined) {
				console.log('Error: No File Selected!');
				res.json('Error: No File Selected');
			} else {
				// If Success
				console.log('cming');
				const imageName = req.file.key;
				const imageLocation = req.file.location; // Save the file name into database into profile model
				const itemDetail = JSON.parse(req.body.prod);
				const { itemname, itemdescription, unitprice } = itemDetail;

				const newProduct = new Products({
					itemname,
					itemdescription,
					unitprice,
					itemImageURL: imageLocation,
				});
				const res = await newProduct.save();
				res.json(res);
			}
		}
	});
});
router.post('/', async (req, res) => {
	// const { itemdescription, itemnameunitprice, itemname } = req.body;
	console.log(req.body);
});
module.exports = router;
