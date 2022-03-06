const mongoose = require('mongoose');
//mongodb+srv://mehedihasan41:5h5qxHTDOtlLIW8b@mehedihasan.n2hpf.mongodb.net/text-editor?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://mehedihasan41:5h5qxHTDOtlLIW8b@mehedihasan.n2hpf.mongodb.net/text-editor?retryWrites=true&w=majority').then(()=>{

    console.log('Database connect successfully.');

}).catch((error)=>{

    console.log(error);

})