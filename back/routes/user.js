const express = require("express");
const router = express.Router();



// router.get('/', (req, res) => {
//     res.send("/post/ test");
// });

router.patch("/login", async (req, res, next) => {
    console.log("login !!");

    res.status(200).json({ message: '로그인 성공' })
});


module.exports = router;
