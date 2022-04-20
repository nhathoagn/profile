const  express = require('express')
const cors = require('cors')
const  app = express();
app.use(cors());
app.use('/login',(rq, res) =>{
    res.send({
        token: "test456"
    });
});
app.listen(9000, ()=> console.log("API is running on http://localhost:9000/login"))