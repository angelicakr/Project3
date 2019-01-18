const router = require("express").Router();
const stickyRoute = require("./mainRoute");
const loginRoute = require("./userRoute");

// Main route for stickies app 
router.use("/", stickyRoute);

//User Route
router.use("/user", loginRoute);


module.exports = router;
