const router = require("express").Router();
const stickyRoute = require("./mainRoute");

router.use("/browse", stickyRoute);

module.exports = router;
