const pool=require('../../db');
const queries=require('./queries');

//getstudent
const getstudents=(req,res)=>{
    pool.query(queries.getstudents,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
    console.log("getting students");
};

//getstudentsbyid
const getstudentsbyid=(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(queries.getstudentsbyid,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
    console.log("getting students by id");
};
//addstudent
const addstudent=(req,res)=>{
    const {name,email,age,dob}=req.body; //res.body is a object
    //check if email exist
    pool.query(queries.checkemail,[email],(error,results)=>{
        if(results.rows.length){
            res.send("Email Already Exists");
        }else{
            pool.query(queries.addstudent,[name,email,age,dob],(error,results)=>{
                if(error) throw error;
                res.status(201).send("student Created Successfully");
                console.log("student Created Successfully");

            });
        }
    });
    
}
//removestudent
const removestudent=(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(queries.getstudentsbyid,[id],(error,results)=>{
        if(!results.rows.length){
            res.send("No students Found database");
        }
        else{
            pool.query(queries.removestudent,[id],(error,results)=>{
                if(error) throw error;
                res.status(200).send("student remove successfully");
            });
        }
    });
}

//updatestudent
 const updatestudent=(req,res)=>{
    const id=parseInt(req.params.id);
    const {name}=req.body;
    pool.query(queries.getstudentsbyid,[id],(error,results)=>{
        if(!results.rows.length){
            res.send("Student does not exist in the database");
        }
        pool.query(queries.updatestudent,[name,id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("student updated successfully");
        })
    })
 }

module.exports = {
    getstudents,
    getstudentsbyid,
    addstudent,
    removestudent,
    updatestudent,
};