const {Router}=require('express');
const controller=require('./controller');

const router=Router();

// router.get('/',(req,res)=>{
//     res.send("using api route");
// });
router.get("/",controller.getstudents);
router.post("/add",controller.addstudent);
router.get("/:id",controller.getstudentsbyid);
router.delete("/:id",controller.removestudent)
router.put("/:id",controller.updatestudent);

module.exports=router;