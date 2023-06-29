const getstudents="SELECT * FROM students";
const getstudentsbyid="SELECT * FROM students WHERE id=$1"; //$1=is variable
const checkemail="SELECT * FROM students WHERE email=$1 "
const addstudent="INSERT INTO students(name,email,age,dob) VALUES ($1,$2,$3,$4)";
const removestudent="DELETE FROM students WHERE id=$1"
const updatestudent="UPDATE students SET name=$1 WHERE id=$2";

module.exports={
    getstudents,
    getstudentsbyid,
    checkemail,
    addstudent,
    removestudent,
    updatestudent,
};