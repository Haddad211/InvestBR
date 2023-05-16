const FriendshipInvitation = require('./friendshipModel');
const Investor = require('../investor/investorModel');
const Post =require('../Poste/posteModel');

const friendshipInvitations = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const recipientId = req.params.id;
    const postid=req.body.postid

    if (senderId === recipientId) {
      return res.status(400).json({ error: 'Sender ID and recipient ID cannot be the same' });
    }
    const existingInvitation = await FriendshipInvitation.findOne({
      $or: [
        { sender: senderId, receiver: recipientId},
        { sender: recipientId, receiver: senderId}
      ]
    });

    if (existingInvitation) {
      return res.status(400).json({ error: 'Friendship invitation already exists' });
    }

    const investor = await Investor.findById(senderId);

    if (!investor) {
      return res.status(404).json({ error: 'Investor not found' });
    }
    

    const invitation = await FriendshipInvitation.create({ sender: senderId, receiver: recipientId,postid:postid });
    const matching=await Post.findById(postid)
    matching.Nbmatching += 1;
    matching.Branchlist.push(investor.branch);
    matching.save();
    

    res.status(201).json({ invitation, senderName: `${investor.firstname} ${investor.lastname}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { friendshipInvitations };
