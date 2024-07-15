const { User } = require("../models");
const { signToken } = require("../utils/auth");

module.exports = {
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user.id : params.id }, { email: params.email }],
    });

    if (!foundUser) {
      return res.status(404).json({ message: "Could not find this user!" });
    }

    res.json(foundUser);
  },
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: "Something is wrong!" });
    }
    const token = signToken(user);
    res.json({ user, token });
  },
  async login({ body }, res) {
    try {
        const user = await User.findOne({ email: body.email }).select('-password');
        if (!user) {
          return res.status(401).json({ message: "Incorrect email or password." });
        }
    
        const correctPw = await user.isCorrectPassword(body.password);
        if (!correctPw) {
          return res.status(401).json({ message: "Incorrect email or password." });
        }
        
        const token = signToken(user);
        res.json({ token, user });
      } catch (error) {
        // Send error to errorMiddleware.js
        next(error);
      }
  },
}