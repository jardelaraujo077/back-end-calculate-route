const aval = require('./avalabledCreate')

exports.avalabledController = async (data) =>{
    const { post = false } = data.type

    if(post == true){
        let result = await aval.avalabledCreate(data)     
        return result
    }

}