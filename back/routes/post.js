const express = require("express");
const router = express.Router();
const { Post } = require("../models");

const columns = [
  { key: "id", name: "ID" },
  { key: "name", name: "성명" },
  { key: "position", name: "직책" },
  { key: "telephone", name: "전화번호" },
  { key: "email", name: "이메일" },
];

const rows = [
  {
    id: 0,
    name: "hyun1",
    position: "사원",
    telephone: "010-4903-8051",
    email: "terecal@daum.net",
  },
  {
    id: 1,
    name: "hyun2",
    position: "대리",
    telephone: "010-4903-8052",
    email: "terecal@daum.net",
  },
  {
    id: 2,
    name: "hyun3",
    position: "부장",
    telephone: "010-4903-8053",
    email: "terecal@daum.net",
  },
  {
    id: 3,
    name: "hyun4",
    position: "회장",
    telephone: "010-4903-8054",
    email: "terecal@daum.net",
  },
  {
    id: 4,
    name: "hyun5",
    position: "cto",
    telephone: "010-4903-8056",
    email: "terecal@daum.net",
  },
];

// router.get('/', (req, res) => {
//     res.send("/post/ test");
// });

router.post("/", async (req, res, next) => {
  console.log("req.body : ", req.body);

  try {
    console.log("저장 요청 받음");

    const saveData = req.body;

    for (var i = 0; i < saveData.length; i++) {
      let searchid;
      let exist = false;

      if (!saveData[i]) {
        console.log("empty !!");
        console.log("saveData : ", saveData[i]);
      } else {
        console.log("update !!!!!!");
        console.log("saveData : ", saveData[i]);
        const result = Post.update(
          {
            name: saveData[i].name,
            position: saveData[i].position,
            telephone: saveData[i].telephone,
            job: saveData[i].job,
          },
          { where: { id: saveData[i].id } }
        );
      }
      //   const post = await Post.create({
      //     name: saveData[i].name,
      //     position: saveData[i].position,
      //     telephone: saveData[i].telephone,
      //     job: saveData[i].job,
      //   });
    }

    const posts = await Post.findAll({
      limit: 10,
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/", async (req, res) => {
  console.log("req.body.name : ", req.body.name);

  try {
    const where = {};
    const posts = await Post.findAll({
      // where,
      limit: 10,
    });
    console.log(posts);

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
