const express = require('express');
const app = express();
const cors = require('cors');
let text = { msg: 'ho ho ho ' };
app.use(cors());
app.post('*', (req, res) => {
	text.msg = req.query.msg || 'ho ho ho ';
	res.json(text);
});
app.get('*', (req, res) => {
	res.json(text);
});
app.listen(3030, () => console.log('running'));
