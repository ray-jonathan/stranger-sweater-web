const express = require('express');
const app = express();
app.use('*', (req, res) => {
	res.json({ msg: 'success' });
});
app.listen(3030, () => console.log('running'));
