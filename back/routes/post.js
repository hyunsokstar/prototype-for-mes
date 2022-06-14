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
  // console.log("req.body : ", req.body);

  try {
    console.log("저장 요청 받음");
    const saveData = req.body;

    for (var i = 0; i < saveData.length; i++) {
      let searchid;
      let exist = false;

      if (!saveData[i]) {
        console.log("empty !!");
        console.log("saveData[i].id : ", saveData[i]);
        // console.log("saveData : ", saveData[i]);
      } else {
        const post_result = await Post.count({ where: { id: saveData[i].id } });

        console.log("post_result : ", post_result);
        // console.log("saveData : ", saveData[i]);

        if (post_result > 0) {
          console.log("update !!!!!!");
          const result = Post.update(
            {
              name: saveData[i].name,
              position: saveData[i].position,
              telephone: saveData[i].telephone,
              job: saveData[i].job,
            },
            { where: { id: saveData[i].id } }
          );
        } else {
          console.log("create !!");
          const post = await Post.create({
            name: saveData[i].name ?? "",
            position: saveData[i].position ?? "manager",
            telephone: saveData[i].telephone ?? "010",
            job: saveData[i].job ?? "",
          });
        }
      }
    }

    const posts = await Post.findAll({
      limit: 10,
      order: [["id", "DESC"]],
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// router.get("/", async (req, res) => {
router.get("/:pageNum/:pageLimitRow", async (req, res) => {

  console.log("req.params.pageNum : ", req.params.pageNum);
  console.log("req.params.pageLimitRow : ", req.params.pageLimitRow);

  const pageNum = req.params.pageNum;
  const pageLimitRow = req.params.pageLimitRow;
  
  try {
    const where = {};

    console.log("pageNum : ", pageNum);
    console.log("pageLimitRow : ", pageLimitRow);

    const posts = await Post.findAll({
      // where,
      limit: 10,
      order: [["id", "DESC"]],
    });
    // console.log(posts);

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    // next(error);
  }
});

router.delete("/", async (req, res) => {
  console.log("req.body : ", req.body);
  const count = await Post.destroy({ where: { id: req.body.deleteIds } });
  console.log(`deleted row(s): ${count}`);

  const posts = await Post.findAll({
    limit: 10,
    order: [["id", "DESC"]],
  });

  res
    .status(200)
    .json({ posts: posts, message: `delte  ${count} row success !!` });
  // res.status(200).json({message : `delte  ${count} row success !!`})
});

module.exports = router;
