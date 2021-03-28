const router = require("express").Router();
const PhoneModel = require("../models/Phone.model");
const uploader = require("../utils/cloudinary.config.js");

//Main server routes

//Get all phones
router.get("/phones", (req, res) => {
  PhoneModel.find()
    .then((phones) => {
      res.status(200).json(phones);
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: "Something went wrong",
        message: err,
      });
    });
});

// Get Phone Details
router.get("/phones/:phoneId", (req, res) => {
  PhoneModel.findById(req.params.phoneId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

//Create new Phone
router.post("/add-phone", uploader.single("imageUrl"), (req, res) => {
  let imageFileName = "";
  req.file ? (imageFileName = req.file.path) : (imageFileName = "");

  const {
    name,
    manufacturer,
    description,
    color,
    price,
    screen,
    processor,
    ram,
  } = req.body;

  if (
    !name ||
    !manufacturer ||
    !description ||
    !color ||
    !price ||
    !screen ||
    !processor ||
    !ram ||
    !imageFileName
  ) {
    res.status(500).json({
      errorMessage: "Please fill in all fields",
    });
    return;
  }

  PhoneModel.create({
    name,
    manufacturer,
    description,
    color,
    price,
    screen,
    processor,
    ram,
    imageFileName: imageFileName,
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: "Something went wrong adding new Phone",
        message: err,
      });
    });
});

//Edit existing Phone (WE NEED CLOUDINARY)
router.patch("/edit/:phoneId", uploader.single("imageUrl"), (req, res) => {
  let imageFileName = "";
  const {
    name,
    manufacturer,
    description,
    color,
    price,
    screen,
    processor,
    ram,
  } = req.body;

  if (
    !name ||
    !manufacturer ||
    !description ||
    !color ||
    !price ||
    !screen ||
    !processor ||
    !ram
  ) {
    res.status(500).json({
      errorMessage: "Please fill in all fields",
    });
    return;
  }

  PhoneModel.findById(req.params.phoneId)
    .then((response) => {
      req.file
        ? (imageFileName = req.file.path)
        : (imageFileName = response.imageFileName);
      PhoneModel.findByIdAndUpdate(
        req.params.phoneId,
        {
          name,
          manufacturer,
          description,
          color,
          price,
          screen,
          processor,
          ram,
          imageFileName: imageFileName,
        },
        { new: true }
      )
        .then((response) => {
          res.status(200).json(response);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: "Something went wrong updating",
            message: err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: "Something went wrong",
        message: err,
      });
    });
});

//Delete existing Phone
router.delete("/delete/:phoneId", (req, res) => {
  PhoneModel.findByIdAndDelete(req.params.phoneId)
    .then((phones) => {
      res.status(200).json(phones);
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: "Something went wrong when deleting",
        message: err,
      });
    });
});

module.exports = router;
