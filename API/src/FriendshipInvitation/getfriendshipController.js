const FriendshipInvitation = require('./friendshipModel');
const Investor = require('../investor/investorModel');
const  Post=require('../Poste/posteModel');

const getFriendshipInvitationsForInnovator = async (req, res) => {
  try {
    const userId = req.params.id; 
    const invitations = await FriendshipInvitation.find({ receiver: userId,status: 'pending' });

    const SenderNames = await Promise.all(invitations.map(async invitation => {
      const investor = await Investor.findById(invitation.sender);
      const post =await Post.findById(invitation.postid);
     
      return {idinvestor:investor._id , senderName: investor.firstname, senderLastName:  investor.lastname, status:invitation.status,id:invitation.id,title:post.title };
    }));
 
    res.status(200).json(SenderNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getFriendshipInvitationsForInnovator };
