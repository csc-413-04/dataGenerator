
const fs = require('fs');

const rand = (max) => {
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

const createRandomData = (size) => {
    const data = {
        users: [],
        posts: [],
    };

    for (let i = 0; i < size; i++) {
        data.users.push({
            userId: i,
            userName: `user_${i}`,
        });
    }

    for (let i = 0; i < size; i++) {
        data.posts.push({
            userId: i,
            postId: i,
            data: 'some dummy data',
        });
    }

    fs.writeFile('data.json', JSON.stringify(data, null, 2), () => {
        console.log('Data written!');
    });
}

module.exports = { createRandomData };
