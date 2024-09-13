import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });

  res.cookie("jwt", token, {
    maxAge: 2 * 24 * 60 * 60 * 1000,
    httpOnly: true, // Prevent XSS attacks or cross-site scripting attacks
    sameSite: "strict", // Prevent CSRF attacks or cross-site request forgery
  });
};

export default generateTokenAndSetCookie;
