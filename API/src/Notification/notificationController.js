const notification =require('./notificationModel')


const getnotification =async (req,res)=>{

try{
   const id =req.params.id;
   const message=req.body.message;
   const Notification = await notification.create({innovator:id,message:message})

}
catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }


}

const getnbnotification = async (req, res) => {
    try {
      const id = req.params.id;
      const nbNotification = await notification.countDocuments({ innovator: id });
      const Notification = await notification.find({ innovator: id });
  
      res.status(200).json({ nbNotification, Notification });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  const clearnotifications = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await notification.deleteMany({ innovator: id });
      res.status(200).json({ message: `Cleared ${result.deletedCount} notifications` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
  
  const getnotificationforinvestor=async (req,res)=>{

    try{
       const id =req.body.idinvestor;
       const message=req.body.message;
       const Notification = await notification.create({investor:id,message:message})
    
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    
    
    }
  const getnbnotificationforinvesotr = async (req, res) => {
    try {
      const id = req.params.id;
      const nbNotification = await notification.countDocuments({ investor: id });
      const Notification = await notification.find({ investor: id });

      res.status(200).json({ nbNotification, Notification });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
  const clearnotificationsforinvestor = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await notification.deleteMany({ investor: id });
      res.status(200).json( "Clearednotifications");
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
  
  module.exports = { getnotification, getnbnotification,clearnotifications, getnbnotificationforinvesotr,clearnotificationsforinvestor,getnotificationforinvestor };
  