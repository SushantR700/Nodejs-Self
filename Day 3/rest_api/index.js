const express =  require("express");
const users = require("./mockaroo.json");
const fs = require("fs");
const { json } = require("body-parser");

const app = express()

app.use(express.urlencoded({
    extended: false
}))

app.get("/api/users", (req,res)=> {
    res.json(users);
})

app.post("/api/users", (req,res)=> {
    const user = req.body;
    users.push({
        id: users.length + 1,
        ...user
    });
    fs.writeFile("./mockaroo.json", JSON.stringify(users), (err,data) => {
        res.json({
            status: "Success" , id: users.length
        })
    })
   
})

app.get("/users", (req,res) => {
    const html = `<ul>

        ${users.map((user) => `<li> ${user.first_name} </li>`).join("")}
    </ul>`
    res.send(html)
})



app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const updatedUserData = req.body;
        const index = users.findIndex((user) => user.id === id);
        if (index !== -1) {
            users[index] = { ...users[index], ...updatedUserData };
            return res.json({
                status: "Success",
                message: "User updated successfully"
            });
        } else {
            return res.status(404).json({
                status: "Error",
                message: "User not found"
            });
        }
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const index = users.findIndex((user) => user.id === id);
        if (index !== -1) {
            users.splice(index, 1);
            return res.json({
                status: "Success",
                message: "User deleted successfully"
            });
        } else {
            return res.status(404).json({
                status: "Error",
                message: "User not found"
            });
        }
    });




app.listen(3001, ()=>{
    console.log(`Server is running on port http://localhost:3001`)
});

