const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/user"
router.route("/")
  .get(loginController.findAll)
  .post(loginController.create);

module.exports = router;