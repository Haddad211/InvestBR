const invitation = require('../FriendshipInvitation/friendshipModel');
const Investor=require('../investor/investorModel')
const Post = require('../Poste/posteModel');

const viewfriends = async (req, res) => {
  try {
    const id = req.params.id;
    const invitations = await invitation.countDocuments({ sender: id });
    return res.status(200).json({ invitations });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTopFourBranches = async (req, res) => {
  try {
    const allposts = await Post.countDocuments();
    const result = await Post.aggregate([
      {
        $group: {
          _id: '$branch',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          branch: '$_id',
          count: 1,
          percentage: {
            $round: [{ $multiply: [{ $divide: ['$count', allposts] }, 100] }, 0],
          },
        },
      },
      {
        $sort: { percentage: -1 },
      },
      {
        $limit: 4,
      },
    ]);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};



const getTopThreePosts = async (req, res) => {
  try {
    const result = await Post.find().sort({ Nbmatching: -1 }).limit(3);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getLastThreePostsByBranch = async (req, res) => {
  try {
    const id=req.params.id
    const investor=await Investor.findById(id)
    const result = await Post.find({ branch: investor.branch }).sort({ createdAt: -1 }).limit(3);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { viewfriends, getTopFourBranches, getTopThreePosts,getLastThreePostsByBranch };