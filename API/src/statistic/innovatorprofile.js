const post=require('../Poste/posteModel');
const invitation=require('../FriendshipInvitation/friendshipModel');


const viewfriendsandposts =async (req,res)=>{
try{
    const id=req.params.id
    const posts= await post.countDocuments({innovator:id})
    const invitations=await invitation.countDocuments({ receiver:id})
    return res.status(200).json({ posts, invitations });
}
catch (error) {
    res.status(500).send(error);
  }
}

module.exports={viewfriendsandposts}