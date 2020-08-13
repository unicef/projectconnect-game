const router = require("express").Router();

router.get("/ping", (req, res) => {
  res.send("pong");
});

router.post("/user", async (req, res) => {
  const ungaProcoChain = req.app.get("ungaProcoChain");
  const { user } = req.body;
  console.log("Create user api called");
  try {
    await ungaProcoChain.db.saveUser(user);
  } catch (e) {
    return console.log("Error:", e);
  }
  res.send(user);
});

router.post("/blocks", async (req, res) => {
  const ungaProcoChain = req.app.get("ungaProcoChain");
  const { block } = req.body;
  console.log("Create block api called");
  try {
    await ungaProcoChain.db.saveBlock(block);
  } catch (e) {
    return console.log("Error", e);
  }
  res.send(block);
});

router.get("/blocks", async (req, res) => {
  const ungaProcoChain = req.app.get("ungaProcoChain");
  let blocks = [];
  console.log("Get blocks api called");
  try {
    blocks = await ungaProcoChain.db.getBlocks();
  } catch (e) {
    console.log("Error", e);
  }
  res.json(blocks);
});

module.exports = router;
