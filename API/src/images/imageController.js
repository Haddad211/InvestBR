const path = require('path');
const Image = require('./imageModel');
const multer = require('multer');
const fs = require('fs');
// Set storage engine
const storage = multer.diskStorage({
  destination: './public/images/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('image');

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Images only!');
  }
}

// Upload image
const uploadImage = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error uploading file.' });
      }

      if (!req.file) {
        return res.status(400).json({ message: 'No files were uploaded.' });
      }

      const newImage = new Image({
        imageName: req.file.filename,
        imageData: req.file.path
      });

      const savedImage = await newImage.save();

      res.json({ message: 'File uploaded successfully.', data: savedImage });
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error uploading file.' });
  }
};

const getAllImages = async (req, res) => {
  try {
    const images = await Image.find({});
    const imageArray = [];

    images.forEach(image => {
      const imageData = fs.readFileSync(image.imageData);
      const base64Image = imageData.toString('base64');
      const mimeType = image.imageData.split('.').pop();

      const imageObj = {
        filename: image.imageName,
        contentType: `image/${mimeType}`,
        imageSrc: `data:image/${mimeType};base64,${base64Image}`
      };
      imageArray.push(imageObj);
    });

    res.json({ message: 'Successfully retrieved images', data: imageArray });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving images' });
  }
};



module.exports = {
  getAllImages,
  uploadImage
};
