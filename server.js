const express = require('express');
const dbConnect = require('./config/db');
const app = express();

dbConnect();
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
	console.log('connected');
});
// app.use('/addproduct', require('./routes/addProducts'));
// app.use('/addcart', require('./routes/addToCart'));

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Connected ${PORT}`);
});
