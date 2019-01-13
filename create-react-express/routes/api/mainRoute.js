const router = require("express").Router();
const stickyController = require("../../controllers/stickyController");
//const loginController = require("../../controllers/loginController");

// Route for creating an account  
// Route for (home) login screen
// Route to main app

// "/api/home" will show all current stickies 
router.route("/stickies")
  .get(stickyController.findAll)
  .post(stickyController.create)
  .delete(stickyController.remove)
  .put(stickyController.update);

  // Matches with "/api/login"
// router.route("/login")
//   .get(loginController.findAll)
//   .post(loginController.create);

// Looks for Matches with "/api/home/:id" to find stickies to update
router
  .route("/:_id")
  .get(stickyController.findById)
  .put(stickyController.update)

module.exports = router;

