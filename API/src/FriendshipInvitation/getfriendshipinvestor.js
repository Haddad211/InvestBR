const invitationfn =require('./friendshipModel')
const Innovatorfn=require('../innovater/innovaterModel');

const getFriendshipsendlsit= async (req,res)=>{
  
    try{

        const userId=req.params.id;
        const invitation=await invitationfn.find({senderid:userId,status:'pending'});

        const waiting = await Promise.all(invitation.map(async invitation =>{
            const Innovator =await Innovatorfn.findById(invitation.receiver);
            return {receiverName:Innovator.firstname,receiverLastname:Innovator.lastname,status:invitation.status,id:invitation.id}

        }));
        res.status(200).json(waiting);
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
    

};

module.exports={getFriendshipsendlsit};