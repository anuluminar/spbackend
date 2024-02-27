const studentController =require('../Controllers/studentController')

const express =require('express')


const router =new express.Router()

router.post('/student/register',studentController.registerStudent)


router.get('/student/getall',studentController.getAllStudent)


module.exports=router;