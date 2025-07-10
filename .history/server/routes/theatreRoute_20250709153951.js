const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const Show = require("../models/showModel");
const Theatre = require("../models/theatreModel");

// Add a theatre
router.post("/add-theatre", authMiddleware, async (req, res) => {
  try {
    const newTheatre = new Theatre(req.body);
    await newTheatre.save();
    res.send({
      success: true,
      message: "Theatre added successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// Get all theatres by owner
router.post("/get-all-theatres-by-owner", authMiddleware, async (req, res) => {
  try {
    const theatres = await Theatre.find({ owner: req.body.owner });
    res.send({
      success: true,
      message: "Theatres fetched successfully",
      data: theatres,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// Update a theatre
router.post("/update-theatre", authMiddleware, async (req, res) => {
  try {
    await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
    res.send({
      success: true,
      message: "Theatre updated successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// Delete a theatre
router.post("/delete-theatre", authMiddleware, async (req, res) => {
  try {
    await Theatre.findByIdAndDelete(req.body.theatreId);
    res.send({
      success: true,
      message: "Theatre deleted successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// Get all theatres
router.get("/get-all-theatres", authMiddleware, async (req, res) => {
  try {
    const theatres = await Theatre.find().populate("owner");
    res.send({
      success: true,
      message: "Theatres fetched successfully",
      data: theatres,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// Add a show
router.post("/add-show", authMiddleware, async (req, res) => {
  try {
    const newShow = new Show(req.body);
    await newShow.save();
    res.send({
      success: true,
      message: "Show added successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// Get all shows by theatre
router.post("/get-all-shows-by-theatre", authMiddleware, async (req, res) => {
  try {
    const shows = await Show.find({ theatre: req.body.theatreId }).populate("movie");
    res.send({
      success: true,
      message: "Shows fetched successfully",
      data: shows,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// Delete show
router.post("/delete-show", authMiddleware, async (req, res) => {
  try {
    await Show.findByIdAndDelete(req.body.showId);
    res.send({
      success: true,
      message: "Show deleted successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// ✅ Get all unique theatres which have shows of a movie for a given date
router.post("/get-all-theatres-by-movie", authMiddleware, async (req, res) => {
  try {
    const { movie, date } = req.body;

    const start = new Date(date);
    start.setHours(0, 0, 0, 0);

    const end = new Date(date);
    end.setHours(23, 59, 59, 999);

    const shows = await Show.find({
      movie,
      date: { $gte: start, $lte: end }
    })
      .populate("theatre")
      .sort({ createdAt: -1 });

    let uniqueTheatres = [];
    shows.forEach((show) => {
      const theatreExists = uniqueTheatres.find(
        (t) => t._id.toString() === show.theatre._id.toString()
      );

      if (!theatreExists) {
        const showsForThisTheatre = shows.filter(
          (s) => s.theatre._id.toString() === show.theatre._id.toString()
        );
        uniqueTheatres.push({
          ...show.theatre._doc,
          shows: showsForThisTheatre,
        });
      }
    });

    res.send({
      success: true,
      message: "Theatres fetched successfully",
      data: uniqueTheatres,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// Get show by ID
router.post("/get-show-by-id", authMiddleware, async (req, res) => {
  try {
    const show = await Show.findById(req.body.showId)
      .populate("movie")
      .populate("theatre");
    res.send({
      success: true,
      message: "Show fetched successfully",
      data: show,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
