"use strict";

const { fileLoader } = require("ejs");

class UserStorage {
    static #users = {
        id: ["kim", "lee", "park"],
        password: ["1234", "1234", "123456"],
        name: ["김짱구", "이훈이", "박맹구"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;