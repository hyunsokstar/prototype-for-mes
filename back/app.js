const express = require('express');
const app = express();
// 라우터 임포트
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const cors = require('cors');


db.sequelize.sync({ force: false })
    .then(() => {
        console.log("db 연결 성공");
    })
    .catch("error ::::: ", console.error)

app.use(cors({
    origin: '*',
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("hello express");
});


// 라우터 로직 분기
app.use('/post', postRouter);
app.use('/users', userRouter)


app.listen(3065, () => {
    console.log("Ecpress Server is Excuting");
});
