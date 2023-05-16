const mongoose = require('mongoose');

const friendshipInvitationSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  postid:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
    
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
});

const FriendshipInvitation = mongoose.model('FriendshipInvitation', friendshipInvitationSchema);

module.exports = FriendshipInvitation;
