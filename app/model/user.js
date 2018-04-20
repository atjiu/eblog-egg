module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const _Schema = new Schema({
    username: {type: String},
    password: {type: String},
    token: {type: String},
    date: {type: Date},
  });

  return mongoose.model('User', _Schema);
}
