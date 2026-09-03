const mongoose = require('mongoose');

const citizenSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true  },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    aadhaarlast4: { type: String, required: true ,unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    password: { type: String, required:[ true, 'Password required'] },
    role: { type: String,  default: 'citizen' },
});

module.exports = mongoose.model('Citizen', citizenSchema);