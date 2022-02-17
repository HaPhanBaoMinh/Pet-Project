const express = require("express");
const { postBanner, deleteBanner } = require("../Controllers/bannerController");
const upload = require("../Config/updateImage");

const bannersRouter = express.Router();

bannersRouter.post("/",upload.single('file'), postBanner);
bannersRouter.delete("/",deleteBanner);

module.exports = bannersRouter;