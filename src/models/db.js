const mysql = require("mysql2")
const koneksi = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1212", 
    database:"UKK_SM_DIKTA_db"
})
koneksi.connect((err)=>{
    if (err){
        console.error("error konek ke database",err.stack)
        return
    }
    console.log("berhasil konek ke database");

})
module.exports= koneksi;