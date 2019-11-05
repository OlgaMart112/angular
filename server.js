const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/angularproject'));

app.get('/*', function (res) {
    res.sendFile(path.join(__dirname + '/angularproject/index.html'));
});

app.listen(process.env.PORT || 8080);
