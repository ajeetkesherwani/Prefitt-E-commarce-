const express = require("express");
const {
  createNewsLetter,
} = require("../../controllers/admin/newaLetterController/createNewsLetter");
const {
  getNewsLetter,
} = require("../../controllers/admin/newaLetterController/getNewsLetter");
const {
  deleteNewsLetter,
} = require("../../controllers/admin/newaLetterController/deleteNewsLetter");
const {
  updateNewsLetter,
} = require("../../controllers/admin/newaLetterController/updateNewsLetter");

const router = express.Router();

router.get("/list", getNewsLetter);
router.post("/create", createNewsLetter);
router.patch("/update/:id", updateNewsLetter);
router.delete("/delete/:id", deleteNewsLetter);

module.exports = router;
