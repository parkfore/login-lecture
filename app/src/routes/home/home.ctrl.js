"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    home : (req, res) => {
        res.render("home/index");
     },
    login: (req, res) => {
        res.render("home/login");
    }    
};

const process = {   
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;
        const user = UserStorage.getUsers("id","psword");
        const response = {};
        if(user.id.includes(id)){
            const idx = user.id.indexOf(id);
            if(psword === user.psword[idx]){
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인에 실패하였습니다.";
        return res.json(response);
    },
       
};

module.exports = {
    output,
    process
}; 