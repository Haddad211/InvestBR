
const Post = require('./posteModel');
const Investor = require('../investor/investorModel');

const getPosts = async (req, res) => {
  try {

      const posts = await Post.find().sort({ createdAt: 'desc' }).exec();
      res.status(200).json(posts);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const listofposts =async(req,res)=>{
  try{
    const id=req.params.id;
    const listposts =await Post.find({innovator:id})
    const branchCounts = {};
    listposts.forEach(post => {
      post.Branchlist.forEach(branch => {
        if (!branchCounts[branch]) {
          branchCounts[branch] = 1;
        } else {
          branchCounts[branch]++;
        }
      });
    });

    const investorBranchCounts = await Investor.aggregate([
      { $group: { _id: '$branch', count: { $sum: 1 } } }
    ]);
   return res.status(200).json({listposts,branchCounts,investorBranchCounts})
   

  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }

}
module.exports = { getPosts,listofposts };
