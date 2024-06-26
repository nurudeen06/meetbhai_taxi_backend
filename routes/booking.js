const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const bookingController = require("../controllers/booking");

// Protect all routes after this middleware
router.use(authController.protect);
router.post("/booking", bookingController.createBooking);
router.get("/booking/user/:id", bookingController.getBookingsByUserId);
router.delete("/booking/:id", bookingController.deleteBooking);

// Only admin have permission to access for the below APIs
router.use(authController.restrictTo("admin"));

router.get("/bookings", bookingController.getBookingList);
router.post("/booking/accept/:id", bookingController.acceptBooking);
router.post("/booking/assign/:id", bookingController.assignDriver);

module.exports = router;
