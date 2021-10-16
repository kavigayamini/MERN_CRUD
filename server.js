const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());

app.use(postRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://mernApp:mernApp@mernapp.yfyc8.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(() => {

    console.log('DB connected');
})

.catch((err) => console.log('DB connection error',err));
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});