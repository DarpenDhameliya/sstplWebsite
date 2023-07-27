const router = require("express").Router();

router.use("/authers", require("./SendMail"));
router.use("/contactus", require("./Contackform"));
router.use("/hire", require("./Hireus"));
router.use("/auth", require("./Auth"));
router.use("/meta", require("./Meta"));
router.use("/forget", require("./Forgetpass"));
router.use("/career", require("./CareerDetails"));
router.use("/portfolio", require("./Portfolio"));
router.use("/about", require("./about/About"));
router.use("/aboutvalue", require("./about/AboutValue"));
router.use("/service", require("./Service"));
router.use("/testimonial", require("./Testimonial"));
router.use("/icon", require("./HeaderIcon"));

module.exports = router;
