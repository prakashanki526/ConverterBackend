const { Router } = require("express");
const route = Router();

route.post('/api/uploadFile', async(req,res,next)=>{
    try {
        const file = req.body.file;
        console.log(file);
        // await category.create({name: categoryName});
        res.send("created");
    } catch (error) {
        console.log(error);
        next(error);
    }
})

module.exports = route;