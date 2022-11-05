const express = require("express");
const app = express();
const { TodoRoutes } = require("./routes");
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello, nicholas");
});

app.use("/api/todos", TodoRoutes);

// create route for creating to do
// get todo
// get all todo
// edit todo
// delete

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
