const router = require("express").Router();
// const commentRoutes = require("./comment-routes.js");
const userRoutes = require("./user-routes.js");

// add prefix of '/users' to routes created in 'users-routes.js'
// router.use("/comments", commentRoutes);
router.use("/users", userRoutes);


module.exports = router;