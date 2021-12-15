const router = require("express").Router();
const { 
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought, 
    addReaction, 
    removeReaction
    
} = require("../../controllers/thought-controller.js");

// /api/thoughts
router
    .route("/")
    .get(getAllThought);

// /api/thoughts/:id
router 
    .route("/:id")
    .get(getThoughtById)
    .put(updateThought);

// /api/thoughts/<userId>
router
    .route("/:userId")
    .post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
    .route("/:userId/:thoughtId")
    .delete(removeThought);

router
    .route("/:thoughtId/reactions/")
    .put(addReaction)
    .delete(removeReaction);

// /api/thoughts/<thoughtId>/reactions/<replyid> - deletion
router
    .route("/:thoughtId/reactions/:reactionId")
    .delete(removeReaction);


module.exports = router;