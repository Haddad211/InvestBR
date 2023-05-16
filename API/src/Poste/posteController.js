
const Innovator = require('../innovater/innovaterModel');
const Post = require('./posteModel');

const addPost = async (req, res) => {
  try {
    const id = req.params.id;
     const innovator = await Innovator.findById(id);
      if (!innovator) {
        return res.status(404).json({ message: 'Innovator not found' });
      }

      const post = new Post({
        title: req.body.title,
        description: req.body.description,
        branch:req.body.branch,
        budget:req.body.budget,
        type:req.body.type,
        autherfirstname:innovator.firstname,
        autherlastname:innovator.lastname,
        innovator: innovator._id
      });

      await post.save();
 res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

const searchPost = async (req, res) => {
  try {
    const searchTerm = req.body.search;

    const posts = await Post.find({
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } }
      ]
    });

    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


const dellpost = async (req, res) => {
  try {
    const id = req.body.idpost;
    const post = await Post.findByIdAndRemove(id);
    res.status(200).json({ message: 'The post has been deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = { addPost,searchPost,dellpost };
