const FriendshipInvitation = require('./friendshipModel');
const Investor = require('../investor/investorModel');

const getFriendshipRejectedForInnovator = async (req, res) => {
  try {
    const userId = req.params.id; 
    const invitations = await FriendshipInvitation.find({ receiver: userId,status: 'rejected' });

    const SenderNames = await Promise.all(invitations.map(async invitation => {
      const investor = await Investor.findById(invitation.sender);
      return { senderName: investor.firstname, senderLastName:  investor.lastname, status:invitation.status,id:invitation.id };
    }));
 
    res.status(200).json(SenderNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getFriendshipRejectedForInnovator };
