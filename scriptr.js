let express = require("express");
const path = require("path");
let app = express();
let hbs = require("hbs");

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/user", require("./routes/user"));
hbs.registerPartials(__dirname + "/views/partials");

app.listen(3000, () => {
  console.log("http://localhost:" + 3000);
});
