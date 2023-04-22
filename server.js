const express = require('express');
const app = express();
const routeTest = require('./routes/routeTest.js');
const { default: mongoose } = require('mongoose');

app.use('/api/v1/', routeTest);

mongoose
    .connect('mongodb+srv://wenzheluo:lwz19941120@cluster0.hee5zzj.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'meetfood-database',
    }
    )
    .then(() => {
        console.log('Database Connection is ready...');
        app.listen(8080);
        console.log('server listening on port 8080!');
    })
    .catch ((err) => {
        console.log(err);
    });

