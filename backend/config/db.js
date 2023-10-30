const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://jeremyteurterie:jeremyteurterie@support-app-cluster.gyvdgsm.mongodb.net/?retryWrites=true&w=majority");
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
