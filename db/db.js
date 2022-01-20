const mongoose = require("mongoose");
const dbUrl = process.env.MONGO_URL || 'mongodb+srv://ibtisam:ibtisam@cluster0.meexd.mongodb.net/metalDB?retryWrites=true&w=majority';

mongoose.connect(dbUrl).then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);
