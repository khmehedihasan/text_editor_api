const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mehedihasan41:5h5qxHTDOtlLIW8b@mehedihasan.n2hpf.mongodb.net/text-editor?retryWrites=true&w=majority').then(()=>{

    console.log('Database connect successfully.');

}).catch((error)=>{

    console.log(error);

})