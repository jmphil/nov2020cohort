const express = require("express");
const app = express();
const reload = reload();

//ejs
app.set("view engine", "ejs");

//public
app.use(express.static("public"));

//route references
app.use(require("./routes/index"));
app.use(require("./routes/speakers"));
app.use(require("./routes/feedback"));
app.use(require("./routes/api"));

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
//reloads pages
reload(server, app)