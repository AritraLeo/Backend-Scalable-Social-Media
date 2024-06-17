const mongoose = require('mongoose');

const DiscussionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
    image: { type: String },
    hashtags: [{ type: String }],
    viewCount: { type: Number, default: 0 },
}, { timestamps: true });

const Discussion = mongoose.model('Discussion', DiscussionSchema);
module.exports = Discussion;
