const mongoose = require('mongoose');
const Avalabled = require('../../domain/Avalabled')
exports.avalabledCreate = async (data) =>{
    
    const avalabled = new Avalabled ({
        _id: new mongoose.Types.ObjectId(),
        count: data.count
    });
    const result = await avalabled.save()
        .then(() => {          
           return true
        })
        .catch(err => {           
            return false         
        })        
        return result

}