const Placement = require("../models/Placement");

// GET /api/placements
const getPlacements = async (req, res) => {
  try {
    const placements = await Placement.find({
      userId: req.userId
    });

    res.json(placements);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// POST /api/placements
const createPlacement = async (req, res) => {
  try {
    const { company, role, package: packageAmount, eligible } = req.body;

    const placement = await Placement.create({
      userId: req.userId,
      company,
      role,
      package: packageAmount,
      eligible
    });

    res.status(201).json(placement);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// PUT /api/placements/:id
const updatePlacement = async (req, res) => {
  try {
    const { status } = req.body;

    const placement = await Placement.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.userId
      },
      { status },
      { new: true }
    );

    if (!placement) {
      return res.status(404).json({ message: "Placement not found" });
    }

    res.json(placement);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// DELETE /api/placements/:id
const deletePlacement = async (req, res) => {
  try {
    const placement = await Placement.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });

    if (!placement) {
      return res.status(404).json({ message: "Placement not found" });
    }

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = {
  getPlacements,
  createPlacement,
  updatePlacement,
  deletePlacement
};