const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const discussionRoutes = require('./routes/discussionRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use('/api', discussionRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
