const express = require('express');
const { createDiscussion, updateDiscussion, deleteDiscussion, getDiscussionsByTags, searchDiscussions } = require('../controllers/discussionController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/discussions', auth, createDiscussion);
router.put('/discussions/:id', auth, updateDiscussion);
router.delete('/discussions/:id', auth, deleteDiscussion);
router.get('/discussions', getDiscussionsByTags);
router.get('/discussions/search', searchDiscussions);

module.exports = router;
