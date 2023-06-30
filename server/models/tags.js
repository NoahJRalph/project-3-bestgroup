const {Schema, model} = require('mongoose');

const tagSchema = new Schema({
    tagName: {
        type: String,
        require: true,
        minLength: 1,
        maxLength: 280
    },
    }

);

const Tag = model('Tag', tagSchema);

module.exports = Tag;