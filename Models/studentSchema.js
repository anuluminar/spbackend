const mongoose=require('mongoose')
const studentSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    batch:{
        type:String,
        require:true
    },

})
const student =mongoose.model("student",studentSchema);
module.exports=student;
