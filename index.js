const express = require('express');
const route = require('./routes/route');
const route_view = require('./routes/route_view');
const fileUpload = require('express-fileupload');
let app = express();

app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'))
app.set('view engine', 'ejs');


app.use("/",route_view(express));
app.use("/api_v1",route(express));
app.use("/upload",route(express));

app.listen(3001, () => {
    console.log('Success running 3000');
});

module.exports = app;