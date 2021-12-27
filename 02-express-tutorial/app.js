const express = require('express');
const morgan = require('morgan');
const people = require('./routes/people');
const auth = require('./routes/auth');
app = express();

app.use(express.urlencoded({ extended: false }));
// using public folder for static files
app.use(express.static('./methods-public'));
//parse incoming json data
app.use(express.json());

app.use('/api/people', people);
app.use('/login', auth);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});