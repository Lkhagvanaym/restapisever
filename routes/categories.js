const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/protect");

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categories");

// api/v1/categories/:id/books
const { getCategoryBooks } = require("../controller/books");
router.route("/:categoryId/books").get(getCategoryBooks);

//"/api/v1/categories"
router
  .route("/")
  .get(getCategories)
  .post(protect, authorize("admin"), createCategory);

router
  .route("/:id")
  .get(getCategory)
  .put(protect, authorize("admin", "operator"), updateCategory)
  .delete(protect, authorize("admin"), deleteCategory);

module.exports = router;
