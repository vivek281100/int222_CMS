//const mongoose = require("mongoose");
const Userdb = require("../model/model");

//create and save new user.
exports.create = (req, res) => {
  if (!req.body) {
    res
      .status(400)
      .send({ message: "Cannot be Empty 😒😒 , fill 📝 all the fields 😊" });
    return;
  }

  //new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //save user in db
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "💥💥 something went wrong while creating a create operation",
      });
    });
};

//retrive and return all user // retrive and return single user
exports.find = (req, res) => {
  if (req.body.id) {
    Userdb.findById(id)
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Cannot find user with given id",
        });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "💥💥 something went wrong while retreving user info",
        });
      });
  }
};

//update user data with user id
exports.update = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "📝 fill all the fields , data cannot be empty" });
  }

  const id = req.params.id;

  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `cannot update user or user not found` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error while updating user info" });
    });
};

//delete user with specific user id;
exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "cannot delete , check user id." });
      } else {
        res.send({
          message: "user deleted succesfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error while deleting user info" });
    });
};
