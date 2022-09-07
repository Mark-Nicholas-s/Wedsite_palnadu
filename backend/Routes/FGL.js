var mysql =require("mysql2");
const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
var Connection= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fgllogins",
    port: 3306
});
// Connection.connect(
//     function (err) {
//         if (err) {
//             console.log(err,"Error connecting to Data base");

//         }
//         else{
//             var rollnumber ="20471A05E0";
//             console.log("Connected to Data base");
//             Connection.query(`SELECT * FROM fgllogins RIGHT JOIN fgldataone ON fgldataone.Email = fgllogins.Email`,(err,result)=>{
//                 if (err) {
//                     console.log (err,"Query error");
//                 }
//                 else{
//                     console.log('Connection result is = ',result);
//                 }
//             });
//         }
//     }
// )
router.post('/fglform', (req, res) => {
    var userFglObj = req.body;
    console.log("userFglObj: ", userFglObj);
      Connection.query(`insert into fgldataone values('${userFglObj.DealerName}','${userFglObj.AddressBusinessPremises}','${userFglObj.NameOfThPersoneAtInspection}','${userFglObj.AddressOfThePersonAtInspection}','${userFglObj.DsoLicenseNumber}','${userFglObj.VatTinNumber}','${userFglObj.PriceListAndStockBoard}','${userFglObj.StockRegister}','${userFglObj.SalesRegsiter}','${userFglObj.BillBook}','${userFglObj.WayBills}','${userFglObj.DidBillsIssued}','${userFglObj.CFormsSubmittion}','${userFglObj.Email}') `,(err,result)=>{
        if (err) {
            console.log (err,"Query error");
        }
        else{
            console.log('Connection result is = ',result);
        }
    });

    res.send({message: 'success', res: userFglObj});
});

router.get('/fglform', (req, res) => {
    res.send(`<h1>fglform works!!</h1>`);
});
module.exports = router;
