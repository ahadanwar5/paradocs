import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/user_model.js";
import bcrypt from "bcryptjs";
import { generateToken, isAuth } from "../utils.js";

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
  console.log("Login call was made");
  console.log(req.body);
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        contact:user.contact,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return;
    }
  } else {
    res.status(401).send({ message: "Invalid Email or Password" });
  }
});

userRouter.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
      contact:req.body.contact,
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      contact:user.contact,
      token: generhaateToken(user),
    });
  })
);

userRouter.put(
  "/profile",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }

      // for update user when in inputs add new info
      const updatedUser = await user.save();
      res.send({
        //find user into db
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        contact:updatedUser.contact,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  })
);

export default userRouter;
