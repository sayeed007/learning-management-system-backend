require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const port = process.env.PORT || 6000;

connectDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});