const invitationfn=require('./friendshipModel')


const delfriendshipsend =async (req,res)=>{
try{
   const id=req.params.id;
   const del=await invitationfn.findByIdAndRemove(id);
  

   res.json({ message: 'MATCHING HAS BEEN DELETED' });
} 

    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }

};

module.exports={delfriendshipsend};