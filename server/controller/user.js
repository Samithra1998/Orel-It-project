import userModules from "../modules/userModules.js";
import bcrypt from "bcryptjs";

export const Signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await userModules.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist!" });

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isValidPassword)
      return res.status(404).json({ message: "Incorrect password!" });

    res.status(200).json({ result: existingUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

export const Signup = async (req, res) => {
  const { firstName, lastName, email, age, password, confirmPassword } =
    req.body;

  try {
    const existingUser = await userModules.findOne({ email });
    if (existingUser)
      return res.status(404).json({ message: "User already exist" });

    if (password !== confirmPassword)
      return res.status(404).json({ message: "Password does not match!" });

    const hashPassword = await bcrypt.hash(password, 10);
    const result = await userModules.create({
      email: email,
      password: hashPassword,
      age: age,
      name: `${firstName} ${lastName}`,
    });

    res.status(200).json({ result: result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};
