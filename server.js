const express = require("express");
const app = express(); // top-level express() function exported by the Express module
const port = 3000;

const add = (x, y) => {
  if (x + y > 10) return "sok";
  if (x + y < 0) return 0;
  return Math.floor(x + y);
};

// app.get - Routes HTTP GET requests to the specified path with the specified callback functions.
app.get("/", (req, res) => {
  const result = add(Number(req.query.num1), Number(req.query.num2));
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/* simple GET example
app.get('/', function (req, res) {
  res.send('GET request to homepage')
})
*/
