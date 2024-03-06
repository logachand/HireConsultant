const mongoose = require("mongoose");

const hireConsultant = new mongoose.Schema({
  consultantName: {
    type: String,
  },
  userName: {
    type: String,
  },
  age: {
    type: String,
  },
  interest: {
    type: String,
  },
});

const hiredConsultantModel = mongoose.model('hiredConsultant',hireConsultant)

module.exports = hiredConsultantModel
