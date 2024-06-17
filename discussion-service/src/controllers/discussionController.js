const Discussion = require('../models/discussion');

exports.createDiscussion = async (req, res) => {
    try {
        const { text, image, hashtags, createdById } = req.body;
        const discussion = new Discussion({ userId: req.user.id, text, image, hashtags, createdById });
        await discussion.save();
        res.status(201).json(discussion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateDiscussion = async (req, res) => {
    try {
        const discussionId = req.params.id;
        const updates = req.body;
        const discussion = await Discussion.findByIdAndUpdate(discussionId, updates, { new: true });
        res.json(discussion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteDiscussion = async (req, res) => {
    try {
        const discussionId = req.params.id;
        await Discussion.findByIdAndDelete(discussionId);
        res.json({ message: 'Discussion deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getDiscussionsByTags = async (req, res) => {
    try {
        let { tags } = req.query;
        tags = decodeURIComponent(tags);  // Decode the tags in case they are URL-encoded
        const tagList = tags.split(',').map(tag => tag.trim());
        const discussions = await Discussion.find({ hashtags: { $in: tagList } });
        res.json(discussions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.searchDiscussions = async (req, res) => {
    try {
        const { text } = req.query;
        const discussions = await Discussion.find({ text: new RegExp(text, 'i') });
        res.json(discussions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
