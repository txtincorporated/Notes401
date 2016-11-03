const mongoose = require('mongoose');
//make sure we're using native promises,
//note the librarry that comes with mongodb
mongoose.Promise = Promise;

const dbURI = 'mongodb://localhost/mythical';
mongoose.connect(dbURI);
//if the connection throws an error
mongoose.connection.on('error', function(err) {
  console.log('Mongoose default conncttion error: ' + err)
})

const schema = new mongoose.Schema({
  name: String,
  horn: String
});

const Unicorn = mongoose.model('Unicorn', schema);

//create a new Unicorn
const lilac = new Unicorn({name: 'lilac', horn: 'titanium'});

// lilac.save()
//   .then(savedUnicorn => console.log(savedUnicorn))
//   .catch((err) => console.error(err));

Unicorn.find()
  .then(unicorns => console.log(unicorns));