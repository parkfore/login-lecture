"use strict";
const UserStorage = require("./UserStorage");
class User{
    constructor(body){
        this.body = body;
    }
    login(){
        const client = this.body;
        const {id,psword} = UserStorage.getUserInfo(client.id);
        if(id){
            if(id === client.id && psword === client.psword){
                return {success:true};
            }
            return {success:false,msg:"비밀번호가 잘못되었습니다."};
        }
        return {success:false,msg:"해당 아이디는 없는 아이디입니다."};
    };

    register(){
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    };
}

module.exports = User;