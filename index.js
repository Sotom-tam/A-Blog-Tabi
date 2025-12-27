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
let numDate = Number(x.getMonth() + 1) + x.getDate() + x.getFullYear();
let date = month[x.getMonth()] + " " + x.getDate() + " " + x.getFullYear();
let y = new Date("2025-11-23");
let tag = "God,Growing,Process,Faith".split(",");

let blogPost = [
  {
    id: "post-2064",
    date: "December 27 2025",
    title: "Hey, Welcome",
    content:
      "I have finished all the basic features that this blog website should contain",
    tag: ["Welcome", "hey", "firstpost"],
  },
  {
    id:
      "post-" +
      Number(new Date("2025-12-11").getMonth() + 1) +
      new Date("2025-12-11").getDate() +
      new Date("2025-12-11").getFullYear(),
    date:
      month[new Date("2025-12-11").getMonth()] +
      " " +
      new Date("2025-12-11").getDate() +
      " " +
      new Date("2025-12-11").getFullYear(),
    title: "Who is God?",
    content:
      "I'm sure we've all heard about the existence of an all powerful being. \n About how the world may have been created not by a series of coincidences but Intentionally \n That someone thought about why, what before he put things together and that we're all made for a purpose.\n I think believeing in God is the logical decision.\n I'm not a religious or brainwashed person, but I think only a being who has some sort of reasoning and intelligence could've cooked up this world to be what we see today.\n It is this same logic and reason that maskes me stumble in my faith sometimes. Sometimes I have doubt that God isn't exactly who he claims to be.\n But then again through reasoning, searching, and of course me being an intellignt being I come to find that He is who he says he is. I'm still searching and I don't think I ever will, I sometimes don't have the answers, but My faith is strong ",
    tag: tag,
  },
  {
    id: "post-" + Number(y.getMonth() + 1) + y.getDate() + y.getFullYear(),
    date: month[y.getMonth()] + " " + y.getDate() + " " + y.getFullYear(),
    title: "Who is God?",
    content:
      "I'm sure we've all heard about the existence of an all powerful being. \n About how the world may have been created not by a series of coincidences but Intentionally \n That someone thought about why, what before he put things together and that we're all made for a purpose.\n I think believeing in God is the logical decision.\n I'm not a religious or brainwashed person, but I think only a being who has some sort of reasoning and intelligence could've cooked up this world to be what we see today.\n It is this same logic and reason that maskes me stumble in my faith sometimes. Sometimes I have doubt that God isn't exactly who he claims to be.\n But then again through reasoning, searching, and of course me being an intellignt being I come to find that He is who he says he is. I'm still searching and I don't think I ever will, I sometimes don't have the answers, but My faith is strong ",
    tag: tag,
  },
  {
    id:
      "post-" +
      Number(new Date("2025-12-18").getMonth() + 1) +
      new Date("2025-12-18").getDate() +
      new Date("2025-12-18").getFullYear(),
    date:
      month[new Date("2025-12-18").getMonth()] +
      " " +
      new Date("2025-12-18").getDate() +
      " " +
      new Date("2025-12-18").getFullYear(),
    title: "Who is God?",
    content:
      "I'm sure we've all heard about the existence of an all powerful being. \n About how the world may have been created not by a series of coincidences but Intentionally \n That someone thought about why, what before he put things together and that we're all made for a purpose.\n I think believeing in God is the logical decision.\n I'm not a religious or brainwashed person, but I think only a being who has some sort of reasoning and intelligence could've cooked up this world to be what we see today.\n It is this same logic and reason that maskes me stumble in my faith sometimes. Sometimes I have doubt that God isn't exactly who he claims to be.\n But then again through reasoning, searching, and of course me being an intellignt being I come to find that He is who he says he is. I'm still searching and I don't think I ever will, I sometimes don't have the answers, but My faith is strong ",
    tag: tag,
  },
];
// function createNewEntry(req, res) {
//   let newEntry = {
//     date: date,
//     title: req.body["title"],
//     content: req.body["content"],
//     tag: req.body["tag"].split(","),
//   };
//   blogPost.push(newEntry);
//   console.log(blogPost);
// }

app.use(express.urlencoded({ extended: "true" }));
app.use(express.static("public"));
app.use("/bootstrap", express.static("node_modules/bootstrap/dist"));
app.get("/", (req, res) => {
  res.render("index.ejs", {
    posts: blogPost,
  });
});

app.get("/createNewEntry", (req, res) => {
  res.render("newEntry.ejs");
});
app.post("/createNewEntry", (req, res) => {
  let newEntry = {
    id: `post-${numDate}`,
    date: date,
    title: req.body["title"],
    content: req.body["content"],
    tag: req.body["tag"].split(","),
  };
  blogPost.unshift(newEntry);
  console.log(blogPost);
  res.render("index.ejs", {
    posts: blogPost,
  });
});
app.get("/readingView", (req, res) => {
  const postId = req.query["post-id"];
  const post = blogPost.find((element) => element.id === postId);
  res.render("readingView.ejs", { post });
});
app.listen(port, () => {
  console.log("Listening at Port 3000");
});
