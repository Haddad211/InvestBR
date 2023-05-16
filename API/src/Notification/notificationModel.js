const mongoose=require('mongoose')
var Schema = mongoose.Schema;
var notification = new Schema({

    investor:{
        type: Schema.Types.ObjectId,
    },
    innovator:{
        type:Schema.Types.ObjectId,
    },
    message:{
        type:String,
        required:true
    },
    data:{
        type: Date,
        default: Date.now
    }


})
const Notification = mongoose.model('Notification', notification);
module.exports=Notification