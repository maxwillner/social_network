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
    .put(addReaction)
    .delete(removeThought);

// // /api/thoughts/<userId>/<thoughts>
// router.route("/:userId/:thoughtsId").put(addReply).delete(removeThought); // USE THIS FOR LINE ABOVE -- .put

// /api/<userId>/<thoughtId>/<replyid> - deletion
router.route("/:userId/:thoughtId/:reactionId")
    .delete(removeReaction);


module.exports = router;