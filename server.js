const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  // just some options to deal with deprecation warnings.
  .connect(DB, {
    useNewURLParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection established'));

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
