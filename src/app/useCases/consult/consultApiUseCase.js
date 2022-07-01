const consultRoute = require('./consultApiController')
exports.consultApi= async (req, res) => {  
    const result = await consultRoute.getInfoRoute(req.body)    
    if(!result || result.length >=1){
    const {distance,duration,duration_in_traffic} = result[0].elements[0]      
        res.status(200).json({               
            distance:distance,
            duration:duration,
            duration_in_traffic:duration_in_traffic
            
        }) 
    }else{
        res.status(400).json({               
            msg: 'Erro ao preencher campo obrigatório',
        }) 

    }

}