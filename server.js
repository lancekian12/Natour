const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

mongoose.connect();

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
