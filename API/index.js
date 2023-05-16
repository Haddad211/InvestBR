const express=require('express');
var mongoose=require('mongoose');
const app =express();
var routes= require('./routes/routes')
const cors = require('cors');
mongoose.set('strictQuery', true);
app.use(cors(
    {
      origin: "*"
    }
    ));
mongoose.connect('mongodb+srv://haddad211:123456789Mh@haddad.orogwus.mongodb.net/InvestBridge?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB!');
});

app.listen(8086,function port(error)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log("Port  Connectedddd!!!!!!!!!!! 8086")
    }
});
 
app.use(express.json());
app.use(routes);