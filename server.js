const express = require('express');

const app = express();
const PORT = 4000;

app.use('/', express.static(__dirname + '/static'));

app.get('/', (req, res) => {
   res.sendFile('/index.html');
});

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});
