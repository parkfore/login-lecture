"use strict";

class UserStorage {
    static #user = {
        id: ["a","b","c"],
        psword: ["1","2","3"]
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
}

module.exports = UserStorage;