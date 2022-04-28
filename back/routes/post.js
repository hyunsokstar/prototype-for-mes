const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//     res.send("/post/ test");
// });
router.post("/", async(req,res) => {
    console.log("req.body.name : ", req.body.name);
    res.status(200).json({message:"login success"})
})

module.exports = router;
