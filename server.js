const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : true }));

const indexRouter = require("./routes/index");
const catalogoRouter = require("./routes/catalogo");
const produtoRouter = require("./routes/produto");
const loginRouter = require("./routes/login");

app.listen(port, () => console.log("Server running on port " + port));

app.use("/", indexRouter);
app.use("/catalogo", catalogoRouter);
app.use("/produto", produtoRouter);
app.use("/login", loginRouter);
