const mongoose  = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema({
  customerName: {
    type: String,
    // required: [true, 'Name is required'],
  },
  vehicleNumber: {
    type: String,
    // required: [true, 'Email is required'],
    // match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
  },
  pickupDate: {
    type: String,
    // required: [true, 'Phone is required'],
    // match: /^[0-9]{10}$/i,
  },
  dropDate: {
    type: Date,
    // required: [true, 'DOB is required'],
  },
  location: {
    type: String,
    // required: [true, 'Password is required'],
    // minlength: [8, 'Password should have at least 8 characters'],
  },
  servicePrice: {
    type: String,
    // required: [true, 'Confirm Password is required'],
    // validate: {
    //   validator: function(v) {
    //     return v === this.password;
    //   },
    //   message: 'Confirm Password should be same as Password',
    },
    payableAmount: {
    type: String,
    // required: [true, 'Country is required'],
  },
  
});



module.exports = mongoose.model('Service1', serviceSchema);