const avalabled = require('./avalabledController')
exports.avalabled = async (req,res) =>{
    let data = {
        count: req.body.count,
        type: req.route.methods
    }    
    const result = await avalabled.avalabledController(data)
    if(result){
        res.status(200).json({
            message: "Avalabled created",
            status: true               
        });
    }else{
        res.status(500).json({
            message: "Created Failed",
            status: false
        });
    }
 

}