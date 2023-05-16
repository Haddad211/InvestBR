const Image = require('./imageModel');

const getAllImages = async () => {
  try {
    const images = await Image.find({});
    return images;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  getAllImages,
};
