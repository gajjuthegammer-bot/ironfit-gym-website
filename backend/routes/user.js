const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const MyModel = require("../models/users");


/* =========================================================
   PROFILE IMAGE UPLOAD CONFIGURATION
========================================================= */

const uploadDirectory = path.join(
  __dirname,
  "../uploads/profiles"
);


/* =========================================================
   CREATE UPLOAD DIRECTORY
========================================================= */

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(
    uploadDirectory,
    {
      recursive: true
    }
  );
}


/* =========================================================
   STORAGE
========================================================= */

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(
      null,
      uploadDirectory
    );

  },


  filename: (req, file, cb) => {

    const extension =
      path.extname(file.originalname)
        .toLowerCase();

    const fileName =
      `profile_${req.params.id}_${Date.now()}${extension}`;

    cb(
      null,
      fileName
    );

  }

});


/* =========================================================
   FILE FILTER
========================================================= */

const fileFilter = (
  req,
  file,
  cb
) => {

  const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp"
  ];


  if (
    allowedTypes.includes(
      file.mimetype
    )
  ) {

    cb(null, true);

  } else {

    cb(
      new Error(
        "Only JPG, JPEG, PNG and WEBP images are allowed."
      ),
      false
    );

  }

};


/* =========================================================
   MULTER
========================================================= */

const upload = multer({

  storage: storage,

  fileFilter: fileFilter,

  limits: {
    fileSize: 5 * 1024 * 1024
  }

});


/* =========================================================
   GET ALL USERS
========================================================= */

router.get("/", async (req, res) => {

  try {

    const data =
      await MyModel.find();

    res.status(200).json({

      status: true,

      data: data

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      status: false,

      message: err.message

    });

  }

});


/* =========================================================
   GET SINGLE USER
========================================================= */

router.get("/:id", async (req, res) => {

  try {

    const data =
      await MyModel.findById(
        req.params.id
      );


    if (!data) {

      return res.status(404).json({

        status: false,

        message: "User not found"

      });

    }


    res.status(200).json({

      status: true,

      data: data

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      status: false,

      message: err.message

    });

  }

});


/* =========================================================
   CREATE USER
========================================================= */

router.post("/", async (req, res) => {

  try {

    const data =
      await MyModel.create(
        req.body
      );


    res.status(201).json({

      status: true,

      message:
        "User created successfully",

      data: data

    });

  } catch (err) {

    console.log(err);

    res.status(400).json({

      status: false,

      message: err.message

    });

  }

});


/* =========================================================
   UPDATE USER
   Only name and phone allowed
========================================================= */

router.patch("/:id", async (req, res) => {

  try {

    const {
      name,
      phone
    } = req.body;


    const updateData = {};


    if (
      typeof name === "string" &&
      name.trim()
    ) {

      updateData.name =
        name.trim();

    }


    if (
      typeof phone === "string" &&
      phone.trim()
    ) {

      updateData.phone =
        phone.trim();

    }


    if (
      Object.keys(updateData).length === 0
    ) {

      return res.status(400).json({

        status: false,

        message:
          "Name or phone is required"

      });

    }


    const data =
      await MyModel.findByIdAndUpdate(

        req.params.id,

        updateData,

        {
          new: true,
          runValidators: true
        }

      );


    if (!data) {

      return res.status(404).json({

        status: false,

        message:
          "User not found"

      });

    }


    res.status(200).json({

      status: true,

      message:
        "User updated successfully",

      data: data

    });

  } catch (err) {

    console.log(err);

    res.status(400).json({

      status: false,

      message: err.message

    });

  }

});


/* =========================================================
   UPLOAD PROFILE IMAGE
========================================================= */

router.patch(
  "/profile-image/:id",
  upload.single("profileImage"),
  async (req, res) => {

    try {

      const { id } =
        req.params;


      /* -----------------------------------------
         CHECK IMAGE
      ----------------------------------------- */

      if (!req.file) {

        return res.status(400).json({

          status: false,

          message:
            "Please select a profile image."

        });

      }


      /* -----------------------------------------
         FIND USER
      ----------------------------------------- */

      const user =
        await MyModel.findById(id);


      if (!user) {

        /* Delete uploaded image */

        if (
          fs.existsSync(
            req.file.path
          )
        ) {

          fs.unlinkSync(
            req.file.path
          );

        }


        return res.status(404).json({

          status: false,

          message:
            "User not found."

        });

      }


      /* -----------------------------------------
         DELETE OLD PROFILE IMAGE
      ----------------------------------------- */

      if (
        user.profileImage
      ) {

        const oldImagePath =
          path.join(
            __dirname,
            "..",
            user.profileImage
              .replace(
                "/uploads/",
                "uploads/"
              )
          );


        if (
          fs.existsSync(
            oldImagePath
          )
        ) {

          fs.unlinkSync(
            oldImagePath
          );

        }

      }


      /* -----------------------------------------
         SAVE NEW IMAGE PATH
      ----------------------------------------- */

      user.profileImage =
        `/uploads/profiles/${req.file.filename}`;


      await user.save();


      /* -----------------------------------------
         RESPONSE
      ----------------------------------------- */

      return res.status(200).json({

        status: true,

        message:
          "Profile image updated successfully.",

        data: {

          _id: user._id,

          name: user.name,

          email: user.email,

          phone: user.phone,

          profileImage:
            user.profileImage,

          membership:
            user.membership || null

        }

      });

    } catch (err) {

      console.log(
        "PROFILE IMAGE ERROR:",
        err
      );


      /* -----------------------------------------
         DELETE FILE IF SOMETHING FAILED
      ----------------------------------------- */

      if (
        req.file &&
        fs.existsSync(
          req.file.path
        )
      ) {

        fs.unlinkSync(
          req.file.path
        );

      }


      return res.status(500).json({

        status: false,

        message:
          err.message ||
          "Unable to upload profile image."

      });

    }

  }
);


/* =========================================================
   DELETE USER
========================================================= */

router.delete("/:id", async (req, res) => {

  try {

    const data =
      await MyModel.findByIdAndDelete(
        req.params.id
      );


    if (!data) {

      return res.status(404).json({

        status: false,

        message:
          "User not found"

      });

    }


    res.status(200).json({

      status: true,

      message:
        "User deleted successfully"

    });

  } catch (err) {

    console.log(err);

    res.status(400).json({

      status: false,

      message: err.message

    });

  }

});


/* =========================================================
   MULTER ERROR HANDLER
========================================================= */

router.use(
  (error, req, res, next) => {

    if (
      error instanceof multer.MulterError
    ) {

      if (
        error.code ===
        "LIMIT_FILE_SIZE"
      ) {

        return res.status(400).json({

          status: false,

          message:
            "Image size must be less than 5MB."

        });

      }

    }


    if (error) {

      return res.status(400).json({

        status: false,

        message:
          error.message ||
          "Unable to upload image."

      });

    }


    next();

  }
);


module.exports = router;