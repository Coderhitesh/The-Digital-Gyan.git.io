const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const Routers = require('./routers/Route')
const ConnectDB = require('./config/db')

const port = process.env.PORT || 3000; 


app.use(express.json())
app.use(express.urlencoded( { extended: true })) // parse application/
app.use('/api/v16',Routers)

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

ConnectDB()