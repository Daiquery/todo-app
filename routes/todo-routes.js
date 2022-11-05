const express = require("express");
const router = express.Router();

const todos = [
  {
    id: 1,
    description: "do this",
  },
  {
    id: 2,
    description: "do that",
  },
  {
    id: 3,
    description: "do something",
  },
  {
    id: 4,
    description: "do else",
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ success: true, todos });
});

router.post("/create", (req, res) => {
  // create an id
  const id = Math.floor(Math.random() * 100000);

  // capture data returned from client
  const payload = {
    id,
    description: req.body.description,
  };

  // add data database
  todos.push(payload);

  res.status(201).json({ success: true, payload });
});

router.get("/:id", (req, res) => {
  const found = todos.find((todo) => todo.id === parseInt(req.params.id));

  if (!!found) {
    return res.status(201).json({ success: true, found });
  } else {
    return res.status(404).json({
      error: "No todo wit dat id",
    });
  }
});

router.put("/edit/:id", (req, res) => {
  const payload = {
    description: req.body.description,
  };
  const found = todos.find((todo) => todo.id === parseInt(req.params.id));

  found.description = payload.description;

  return res.status(201).json({ success: true, found });
});

router.delete("/delete/:id", (req, res) => {
  const found = todos.find((todo) => todo.id === parseInt(req.params.id));
  todos.pop(found);

  return res.status(201).json({ success: true, todos });
});

module.exports = router;
