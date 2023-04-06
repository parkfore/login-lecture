"use strict";
const output = {
    home : (req, res) => {
        res.render("home/index");
     },
    login: (req, res) => {
        res.render("home/login");
    }    
};

const user = {
    id: ["a","b","c"],
    psword: ["1","2","3"]
};

const process = {   
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;
        console.log(req.body); 
        if(user.id.includes(id)){
            const idx = user.id.indexOf(id);
            if(psword === user.psword[idx]){
                return res.json({
                    success: true
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다"
        });

    },
       
};

module.exports = {
    output,
    process
}; 