const registerUser = (req,res) =>{
    console.log(req.body);
    res.send("Alright better hello");
};

module.exports=(registerUser);