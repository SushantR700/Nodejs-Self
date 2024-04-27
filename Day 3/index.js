const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from the home page");
})

app.get("/about", (req,res)=> {
    res.send("Hello from about page" + req.query.name);
})

app.get("/services", (req,res) => {
res.json({
    "status": "success",
    "message": "Data retrieved successfully",
    "data": {
      "user": {
        "id": 123,
        "username": "example_user",
        "email": "user@example.com",
        "age": 30
      },
      "posts": [
        {
          "id": 1,
          "title": "First Post",
          "content": "This is the content of the first post."
        },
        {
          "id": 2,
          "title": "Second Post",
          "content": "This is the content of the second post."
        }
      ]
    }
  }
  )
})

app.listen(3000, ()=>{
    console.log(
        "The server is running on port 3000");
});