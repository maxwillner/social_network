const router = require("express").Router();
const { 
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought, 
    addReply, 
    removeReply
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

// /api/thoughts/<userId>/<thoughts>
router
    .route("/:userId/:thoughtId")
    // .put(updateThought)
    .delete(removeThought);

// // /api/thoughts/<userId>/<thoughts>
// router.route("/:userId/:thoughtsId").put(addReply).delete(removeThought); // USE THIS FOR LINE ABOVE -- .put

// // /api/<userId>/<thoughtId>/<replyid> - deletion
// router.route("/:userId/:thoughtId/:replyId").delete(removeReply);  // USE THIS FOR THE REPLY DELETION


module.exports = router;