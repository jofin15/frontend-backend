import express from "express";

const app = express();

app.use(express.static("dist"))

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/jokes",(req,res)=>{
    const jokes= [
        {
            id:1,
            title:"a joke",
            content:"this is a joke"
        },{
            id:2,
            title:"another joke",
            content:"This is another joke."
        },
        {
            id:3,
            title:"yet another one.",
            content:"this is yet another code"
        },{
            id:4,
            title:"A very long joke that will probably never end.",
            content:"This is the content of the fourth joke which is much longer than others and it's not even funny."
        },
        {
            id:5,
            title:"Another short one.",
            content:"done go home"
        }
        

    ]
    res.send(jokes)
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
