const express = require("express");
const router = express.Router();
const { createAsset, getAssets } = require("../controllers/assetsController");

router.post("/", createAsset);
router.get("/", getAssets);

module.exports = router;
