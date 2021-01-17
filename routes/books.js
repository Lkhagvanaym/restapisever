const express = require("express");
const { protect, authorize } = require("../middleware/protect");

const {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
  uploadBookPhoto,
} = require("../controller/books");

const { getBookComments } = require("../controller/comments");

const router = express.Router();

//"/api/v1/books"
router
  .route("/")
  .get(getBooks)
  .post(protect, authorize("admin", "operator"), createBook);

router
  .route("/:id")
  .get(getBook)
  .delete(protect, authorize("admin", "operator"), deleteBook)
  .put(protect, authorize("admin", "operator"), updateBook);

router
  .route("/:id/upload-photo")
  .put(protect, authorize("admin", "operator"), uploadBookPhoto);

router.route("/:id/comments").get(getBookComments);

module.exports = router;
