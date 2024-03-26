const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  revDate: {
    type: Date,
    require: true,
  },
  nightNum: {
    type: Number,
    default: 1
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  hotel: {
    type: mongoose.Schema.ObjectId,
    ref: "Hotel",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Reservation = mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema);
export default Reservation