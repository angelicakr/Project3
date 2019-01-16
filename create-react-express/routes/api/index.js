const router = require("express").Router();
const stickyRoute = require("./mainRoute");

router.use("/", stickyRoute);

module.exports = router;
