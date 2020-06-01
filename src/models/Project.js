const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProjectSchema = new mongoose.Schema({
   title:{
       type:String,
       required:true
   },
    owner:{
       type: String,
        required: true
    },
    createdAt:{
       type: Date,
        default: Date.now
    }
});

ProjectSchema.plugin(mongoosePaginate);
mongoose.model("Project", ProjectSchema);