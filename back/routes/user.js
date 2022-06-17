const express = require("express");
const router = express.Router();
const { User } = require("../models");
const jwt = require('../utils/jwt-util');


// router.get('/', (req, res) => {
//     res.send("/post/ test");
// });

router.patch("/login", async (req, res, next) => {
    console.log("login 1111 !!");
    console.log("req.body.username : ", req.body.username);
    console.log("req.body.password : ", req.body.password);

    try {
        const findUser = await User.findOne({
            where: { user_id: req.body.username },
        });
        console.log("findUser : ", findUser);
        let success = findUser?.password === req.body.password

        console.log("success : ", success);

        if (success) {
            console.log("success");
        } else {
            console.log("failure");
        }

        console.log("findUser : ", findUser);
        const accessToken = jwt.sign(findUser);

        // token = jwt.sign(
        //     { userId: user.id, email: existingUser.email },
        //     "secretkeyappearshere",
        //     { expiresIn: "1h" }
        // );
        console.log("accessToken : ", accessToken);

        res.status(200).json({ // client에게 토큰 모두를 반환합니다.
            ok: true,
            user_id: req.body.username,
            data: {
                accessToken,
            },
        });


    } catch (error) {

    }

    // res.status(200).json({ message: '로그인 성공' })
});


module.exports = router;
