const student= require('../Models/studentSchema')

exports.registerStudent=async(req,res)=>{
    console.log("inside student register method");
    res.status(200).json("registration request received")
    const {name,email,location,batch}=req.body;
    try{
        const existingStudent =await student.findOne({email:email});
        if(existingStudent){
            res.status(406).json("student already exists")
        }
        else{
            const newStudent=new student({
                name:name,
                email:email,
                location:location,
                batch:batch
            })
            await newStudent.save();
            res.status(200).json("Student registered successfully")
        }
    }catch(err){
        res.status(401).json('Register student request failed due to ',err)
    }
}
//get all students

exports.getAllStudent =async(req,res)=>{
    try{
        const allStudentDetails=await student.find()
        res.status(200).json(allStudentDetails)
    }catch(err){
        res.status(401).json("Request failed due to ",err)
    }

}