const express = require("express");
const router = express.Router();
const { User } = require("../models");


// router.get('/', (req, res) => {
//     res.send("/post/ test");
// });

router.patch("/login", async (req, res, next) => {
    console.log("login !!");
    console.log("req.body.username : ", req.body.username);
    console.log("req.body.password : ", req.body.password);

    try {

        const user = await User.findOne({
            where: { user_id: req.body.username },
        });

        let success = user.password === req.body.password

        if (success) {
            console.log("success");
        } else {
            console.log("failure");
        }

    } catch (error) {

    }


    res.status(200).json({ message: '로그인 성공' })
});


module.exports = router;
