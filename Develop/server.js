const { application } = require('express');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.staticc('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(Port, () => {
    console.log(`Now waiting for Port: ${PORT}`)
})