require('dotenv/config');
exports.api = async (data) => {
  return await encodeURI(`${process.env.API_GOOGLE}origins=${data.in}&destinations=${data.for}&departure_time=now&key=${process.env.KEY}`)

}

