const express = require("express");
const router = express.Router();
const users = require("../models/users");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", (req, res) => {
  try {
    if (users.isUser(req.body.email, req.body.senha)) {
      res.send("SUCCESS");
    } else {
      res.send("FAIL");
    }
  } catch {
    res.send("ERROR");
  }
});

module.exports = router;
