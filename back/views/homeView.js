module.exports=async (app)=>{
    app.get('/',async(req,res)=>{
        res.send("Esto es home");
    });
}
