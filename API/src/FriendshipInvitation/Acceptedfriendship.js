const FriendshipInvitation = require('./friendshipModel');
const Investor = require('../investor/investorModel');
const Innovator=require('../innovater/innovaterModel');
const  Post=require('../Poste/posteModel');

const getFriendshipAcceptedForInnovator = async (req, res) => {
  try {
    const userId = req.params.id; 
    const invitations = await FriendshipInvitation.find({ receiver: userId,status: 'accepted' });

    const SenderNames = await Promise.all(invitations.map(async invitation => {
      const investor = await Investor.findById(invitation.sender);
      const post=await Post.findById(invitation.postid);
      return { senderName: investor.firstname, senderLastName:  investor.lastname, status:invitation.status,id:invitation.id,idinvestor:investor.id,title:post.title };
    }));
 
    res.status(200).json(SenderNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
const getFriendshipAcceptedForInvestor = async (req, res) => {
    try {
      const userId = req.params.id; 
      const invitations = await FriendshipInvitation.find({ sender: userId,status: 'accepted' });
  
      const ReceiverNames = await Promise.all(invitations.map(async invitation => {
        const innovator = await Innovator.findById(invitation.receiver);
        return { receiverName: innovator.firstname, receiverLastName:  innovator.lastname, status:invitation.status,id:invitation.id,idinnovator:innovator.id};
      }));
   
      res.status(200).json(ReceiverNames);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };





module.exports = { getFriendshipAcceptedForInnovator,getFriendshipAcceptedForInvestor };
