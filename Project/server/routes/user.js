import { Router } from "express";
import connection from "../database/database.js";
const user = Router();

user.get("/", (req, res) => {
  // res.send("Hello World!");
  // res.json({'message':'User get API Response!'})

  connection.execute("select * from user_information", function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json({
        status: 200,
        message: "User fetced successfu",
        data: result,
      });
    }
  });
});

//get user by id
user.get("/:id", (req, res) => {
  // res.send("Hello World!");
  res.json({ message: "Get user by ID API Response!" + req.params.id });
});

//user post api

//get user by id
user.post("/", (req, res) => {
  connection.execute(
    "insert into user_information (u_first_name,u_last_name,u_email,u_password,is_admin) values (?,?,?,?,?)",
      [req.body.FirstName,
      req.body.LastName,
      req.body.Email,
      req.body.Password,
      req.body.IsAdmin
    ],function(err,result){
        if(err){
            res.send(err);
        }
        else{
            res.json({
                status: 200,
                message: "User created successfully",
                data: result,
              });
        }})
  });
// });

export default user;
