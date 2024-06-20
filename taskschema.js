const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let taskSchema = new Schema({
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        required: false,
        default: false,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{
    timestamps: true 
});
taskSchema.index({description: 'text'});

const Task = mongoose.model('tasks',taskSchema)
module.exports = Task;
