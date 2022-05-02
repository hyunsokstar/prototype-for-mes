const express = require('express');
const router = express.Router();

const columns = [
    { key: 'id', name: 'ID' },
    { key: 'name', name: '성명' },
    { key: 'postion', name: '직책' },
    { key: 'telephone', name: '전화번호' },
    { key: 'email', name: '이메일' },
];

const rows = [
    { id: 0, name: 'Example', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
    { id: 1, name: 'hyun', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
    { id: 2, name: '회장', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
    { id: 3, name: '01049038056', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
    { id: 4, name: 'terecal@daum.net', position: "manager", telephone: "010-4903-8050", email: "terecal@daum.net" },
];


// router.get('/', (req, res) => {
//     res.send("/post/ test");
// });
router.post("/", async (req, res) => {
    console.log("req.body.name : ", req.body.name);
    // res.status(200).json({message:"login success"})
    res.status(200).json({ columns, rows })
})

module.exports = router;
