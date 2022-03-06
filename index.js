require('dotenv').config();
const express = require('express');
require('./src/db/connect');
const app = express();

app.use(express.json({
    type:['application/json','text/plain','application/x-www-form-urlencoded']
}))

app.use(require('./src/middlewares/allowHeaders'));

app.get('/', async(req,res,next)=>{
    try{
        res.send('app is running...')
    }catch(error){
        next(error);
    }

});

app.use('/text', require('./src/routers/text'));

app.use(require('./src/middlewares/errorHandler'));

app.listen(process.env.PORT,()=>{
    console.log(`App is running on port ${process.env.PORT}...`);
});
