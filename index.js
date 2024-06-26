const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
require('./config/connection');
const routes=require('./routes/routes');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors({
    origin: 'https://recurring-app.vercel.app',
    credentials: true
}));
app.use('/api',routes );
const port = process.env.PORT || 5000
app.get('/', (req, res) => res.send('server is running'))
app.listen(port, () => console.log(`bKash PGW app listening on port ${port}!`))