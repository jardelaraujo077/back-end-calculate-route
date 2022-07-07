const app = require('./src/config/express')
const port = normalizaPort(process.env.PORT || '3000');
function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}
// setando a portado servidor
app.listen(3005, ()=>{
    console.log(':) :)');
});

