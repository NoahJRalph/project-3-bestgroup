const { Schema } = require('mongoose');

const tagSchema = new Schema({
    tagName: {
        type: String,
        require: true,
        minLength: 1,
        maxLength: 280
    },
});



module.exports = tagSchema;