module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const _Schema = new Schema({
    title: {type: String},
    content: {type: String},
    tags: {type: String},
    categories: {type: String},
    author: {type: String},
    date: {type: Date},
  });

  return mongoose.model('Post', _Schema);
}
