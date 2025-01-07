const express = require("express");
const router = express.Router();

router.route(`/`).get((req,res)=>{
    res.status(200).send("this is the list");
});

module.exports = router;