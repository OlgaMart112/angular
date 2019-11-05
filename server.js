const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/learn-angular-change-detaction'));

app.get('/*', function (res) {
    res.sendFile(path.join(__dirname + '/dist/learn-angular-change-detaction/index.html'));
});

app.listen(process.env.PORT || 8080);
