const express = require('express');
const dbConnect = require('./config/db');
const app = express();

dbConnect();
app.use(express.json({ extended: false }));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, x-auth-token',
	);
	next();
});

app.get('/', (req, res) => {
	console.log('connected');
});
app.use('/api/addproduct', require('./routes/addProducts'));
app.use('/api/getproduct', require('./routes/getProducts'));
app.use('/api/addtocart', require('./routes/addToCart'));
app.use('/api/getusercart', require('./routes/getUserCart'));
// app.use('/addcart', require('./routes/addToCart'));

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Connected ${PORT}`);
});
