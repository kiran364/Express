const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {schema} = mongoose;
const app = express();
const port = 3000;
//app.disable('etag');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:kiran@cluster0.cjkd2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true}).then(data =>{
    console.log('mongoDB connected')
       app.get('/', (req, res) => { 
         res.status(200).send('Hello this is my home page is')
        })
    app.listen(port, () => {
       console.log(`Example app listening at http://localhost:${port}`)
    })

  }).catch(arr => console.log(`connection error: ${err}`));





