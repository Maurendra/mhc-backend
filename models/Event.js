const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  company_id: {
    type: String,
  },
  vendor_id: {
    type: String,
  },
  vendor_name: {
    type: String,
    required: true,
  },
  event_name: {
    type: String,
    required: true,
  },
  proposed_date_1: {
    type: String,
    required: true,
  },
  proposed_date_2: {
    type: String,
    required: true,
  },
  proposed_date_3: {
    type: String,
    required: true,
  },
  confirm_date: {
    type: String,
  },
  status: {
    type: String,
  },
  created_at: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  note: {
    type: String,
  },
});

const events = mongoose.model("events", EventSchema);
module.exports = events;
