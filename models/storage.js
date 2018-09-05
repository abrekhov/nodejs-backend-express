var mongoose = require('mongoose');

var storageSchema = new mongoose.Schema({
    title:  String,
    id:     {
        type:   Number
    },
    tags:  String,
    duration: String, 
    category: String,
    thumburl: String,
    tagsarr: [String]
    },
    {
        collection:'storage'
    }
        );

//storageSchema.set('toJSON',{virtuals:true});

module.exports = mongoose.model('Video',storageSchema);
