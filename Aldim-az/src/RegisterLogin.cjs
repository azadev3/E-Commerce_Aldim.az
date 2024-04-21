const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());
const port = 3001;
app.listen(port, () => {
  console.log("Server isleyir...");
});

//created connection
//database baglantisi
const database = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
});

//get post on client-server
//front-end a post isteyi
app.post("/aldiq-az-qeydiyyat", async (req, res) => {
  const name = req.body.name.toLowerCase();
  const email = req.body.email.toLowerCase();
  const password = req.body.password.toLowerCase();

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  if (!isValidEmail(email)) {
    res.send({ message: "@" });
  } else {
    const sql = "INSERT INTO user (ad, email, sifre) VALUES (?, ?, ?)";
    const value = [name, email, password];

    await new Promise((resolve, reject) => {
      database.query(sql, value, (error, result) => {
        if (error) {
          reject(error);
          console.log(error);
        } else {
          resolve(result);
          res.send({ message: "success" });
        }
      });
    }).catch((error) => console.log(error));
  }
});

//post isteyi login ucun
app.post("/aldiq-az-login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sql = "SELECT * FROM user WHERE email = ? AND sifre = ?";
  const values = [email, password];

  if (email === "" || password === "") {
    res.send({ message: "empty" });
  } else {
    await new Promise((resolve, reject) => {
      database.query(sql, values, (error, result) => {
        if (error) {
          reject(error);
        } else {
          if (result.length > 0) {
            const checkEmail = result[0].email;
            const checkPass = result[0].sifre;
            if (checkEmail === email && checkPass === password) {
              const payload = { email: email, password: password };
              const useremail = payload.email;
              const secretKey = process.env.SECRETKEY;
              const maintoken = jwt.sign(payload, secretKey, {expiresIn: "12h",});
              const expiration_date = new Date();
              expiration_date.setHours(expiration_date.getHours() + 12);
              const tokensql ="INSERT INTO tokentable (token, expiration_date) VALUES (?, ?)";
              const tokenvalues = [maintoken, expiration_date];
              database.query(tokensql, tokenvalues, (tokenErr, tokenRes) => {
                if (tokenErr) {
                  console.log(tokenErr);
                  res.status(500).send({message: "An error occurred while saving the token.",});
                } else {
                    res.send({ message: "success", token: maintoken, useremail });
               }
          });
          } 
            else {
              res.send({ message: "false" });
            }
          } else {
            res.send({ message: "false" });
          }
          resolve(result);
        }
      });
    });
  }
});
