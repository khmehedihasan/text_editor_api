const express = require('express');
require('./src/db/connect');
const app = express();

app.use(express.json({
    type:['application/json','text/plain','application/x-www-form-urlencoded']
}))

app.use(require('./src/Middlewares/allowHeaders'));

app.get('/', async(req,res,next)=>{
    try{
        res.send('app is running...')
    }catch(error){
        next(error);
    }

});

app.use('/text', require('./src/routers/text'));

app.use(require('./src/Middlewares/errorHandler'));

app.listen(8000 || process.env.PORT,()=>{
    console.log(`App is running on port 8000...`);
});
