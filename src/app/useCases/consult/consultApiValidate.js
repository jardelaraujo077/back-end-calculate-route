
exports.validate = (data) =>{
    if(data.in == ''|| data.for == ''){   
        return false
    }
    return true

}