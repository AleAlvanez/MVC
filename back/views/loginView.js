module.exports=async (app)=>{
    app.get('/login',async(req,res)=>{
        console.log(req.body);
        res.send("hola soy login");
    });
}
