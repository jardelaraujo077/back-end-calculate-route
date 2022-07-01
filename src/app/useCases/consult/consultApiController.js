const axios = require('axios')
const url = require('../../../config/googleConfig')
const validateConsult = require('./consultApiValidate')
exports.getInfoRoute= async (data) => { 
    if(!validateConsult.validate(data)){
        return false
    }
    const api = await url.api(data)
    const result = await axios.post(api)
        .then((response) => { 
            const { data } = response
            const {rows} = data   
            return rows       
        })
        .catch((err) => {
           return err
        })
       

        return result




}