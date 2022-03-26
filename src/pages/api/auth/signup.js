import { hashPassword } from "../../../lib/auth/auth";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default async function Signup(req, res) {
  const { firstName, lastName, email, password } = req.body;
  const { method } = req;
  if (method === "POST") {
    //Error handling on allready exist or create g state to handle error
    await dbConnect();
    const existingUser = await User.findOne({ email: email }).exec();
    console.log(existingUser);
    if (existingUser) {
      res.status(422).json({ message: "User is already registered." });
      return;
    }

    const hashedPassword = await hashPassword(password);

    try {
      const result = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
      });
      res.status(201).json({ message: "Created user!" }, result);
    } catch (error) {
      console.log(error);
    }
  }
}
