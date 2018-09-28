const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const parser = require('body-parser');
const router = require('./router');

//instantiate express server
const app = express();

//declaring port
const port = 3000;

//using middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

//serving static files
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});