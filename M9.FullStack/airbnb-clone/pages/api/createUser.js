import User from "../../models/UserModel";
import dbConnect from "../../utils/db";

export default async function addUser(req, res) {
  const user = req.body;

  await dbConnect();

  const checkUser = await User.findOne({ email: user.email });

  if (!checkUser) {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(user.password, salt);
    const newUser = { email: user.email, password: password, role: user.role };
    const result = await new User(newUser).save();
    return res.status(201).json(result);
  } else {
    const result = { status: "error", message: "already exists" };
    return res.status(409).send(result);
  }
}
