const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
require('./config/connection');
const routes=require('./routes/routes');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
// app.use(cors());
// app.options('*', cors());
app.use('/api',routes );
const port = process.env.PORT || 5000
app.get('/', (req, res) => res.send('server is running'))
app.listen(port, () => console.log(`bKash PGW app listening on port ${port}!`))