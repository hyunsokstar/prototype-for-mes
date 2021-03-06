module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        // id가 기본적으로 들어있다.
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        position: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        telephone: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        job: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    });
    Post.associate = (db) => {
    };
    return Post;
};

