const FriendshipInvitation = require('./friendshipModel');


const setStatusFriendshipInvitation = async (req, res) => {
    try {
        const invitation = await FriendshipInvitation.findByIdAndUpdate(
          req.params.id, 
          { status: req.body.status }, // Update the status with the value from the request body
          { new: true } // Return the updated document
        );
    
        if (!invitation) {
          return res.status(404).send({ message: 'Friendship invitation not found' });
        }
    
        res.send(invitation);
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
      }

};
module.exports={setStatusFriendshipInvitation}