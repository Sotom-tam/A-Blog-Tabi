import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let x = new Date();
x.getDate();
let date = month[x.getMonth()] + " " + x.getDate() + " " + x.getFullYear();
let blogPost = [];

function createNewEntry(req, res) {
  let newEntry = {
    date: date,
    title: req.body["title"],
    content: req.body["content"],
    tag: req.body["tag"],
  };
  blogPost.push(newEntry);
  console.log(blogPost);
}

app.use(express.urlencoded({ extended: "true" }));
app.use(express.static("public"));
app.use("/bootstrap", express.static("node_modules/bootstrap/dist"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/createNewEntry", (req, res) => {
  res.render("newEntry.ejs");
});
app.post("/creaTeNewEntry", (req, res) => {
  let newEntry = {
    date: date,
    title: req.body["title"],
    content: req.body["content"],
    tag: req.body["tag"],
  };
  blogPost.push(newEntry);
  console.log(blogPost);
  res.render("index.ejs", newEntry);
  console.log(newEntry);
});

app.listen(port, () => {
  console.log("Listening at Port 3000");
});
