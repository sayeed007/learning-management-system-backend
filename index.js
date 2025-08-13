require('dotenv').config();
const connectDB = require('./src/config/db');
const app = require('./src/app');

const port = process.env.PORT || 6000;

connectDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});