export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // Use secure cookies in production
  sameSite: "Strict",
};
