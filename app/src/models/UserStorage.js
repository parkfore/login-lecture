"use strict";

class UserStorage {
    static #user = {
        id: ["a","b","c"],
        psword: ["1","2","3"],
        name: ["가","나","다"]
    };
    static getUsers(...fields) {
        const user = this.#user;
        const newUsers = fields.reduce((newUsers, field) => {
            if(user.hasOwnProperty(field)) {
                newUsers[field] = user[field];
            }
            return newUsers;
        },{});
        return newUsers;
    };

    static getUserInfo(id) {
        const user = this.#user;
        const userIdx = user.id.indexOf(id);
        const userKeys = Object.keys(user);
        const userInfo = userKeys.reduce((userInfo,keys) => {
            userInfo[keys] = user[keys][userIdx];
            return userInfo;
        },{});
        return userInfo;
    }

    static save(userinfo){
        const users = this.#user;
        users.id.push(userinfo.id);
        users.psword.push(userinfo.psword);
        users.name.push(userinfo.name);
        return {success: true};
    }
}

module.exports = UserStorage;