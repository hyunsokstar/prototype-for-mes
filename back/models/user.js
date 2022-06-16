module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        // id가 기본적으로 들어있다.
        user_id: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    });
    User.associate = (db) => {
    };
    return User;
};

