const mongoose  = require("mongoose");

const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: {
    type: String,
    // required: [true, 'Name is required'],
  },
  email: {
    type: String,
    // required: [true, 'Email is required'],
    // match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
  },
  phone: {
    type: String,
    // required: [true, 'Phone is required'],
    // match: /^[0-9]{10}$/i,
  },
  dob: {
    type: Date,
    // required: [true, 'DOB is required'],
  },
  password: {
    type: String,
    // required: [true, 'Password is required'],
    // minlength: [8, 'Password should have at least 8 characters'],
  },
  confirmPassword: {
    type: String,
    // required: [true, 'Confirm Password is required'],
    // validate: {
    //   validator: function(v) {
    //     return v === this.password;
    //   },
    //   message: 'Confirm Password should be same as Password',
    },
  country: {
    type: String,
    // required: [true, 'Country is required'],
  },
  address: {
    type: String,
    // required: [true, 'Address is required'],
  },
  image: {
    type: String,
    // validate: {
    //   validator: function(v) {
    //     return v ? /\.(jpg|jpeg|png|gif)$/i.test(v) : true;
    //   },
    //   message: 'Invalid Image Format',
    // },
  },
  document: {
    type: String,
    // validate: {
    //   validator: function(v) {
    //     return v ? /\.(pdf|doc|docx)$/i.test(v) : true;
    //   },
    //   message: 'Invalid Document Format',
    // },
  },
});



module.exports = mongoose.model('Customer1', employeeSchema);