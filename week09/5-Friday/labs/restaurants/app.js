const express = require("express");
const app = express();
// const reload = reload();

//ejs
app.set("view engine", "ejs");

//public
app.use(express.static("public"));

//route references
app.use(require("./routes/dishes"));
app.use(require("./routes/newDish"));


app.listen(3000, () => {
  console.log(`running on port 3000`)
});

//reloads pages
// reload(server, app)