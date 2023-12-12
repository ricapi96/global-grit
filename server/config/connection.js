const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/wave-walker';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error(err));
