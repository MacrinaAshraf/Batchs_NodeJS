require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
const batchRouter = require('./routes/batch.route')

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
    console.log('Database connectd');
})
mongoose.connection.on('error', () => {
    console.log('Database Failed');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', batchRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);

    }
    console.log(`server is ready ${PORT}`);
})

module.exports = app