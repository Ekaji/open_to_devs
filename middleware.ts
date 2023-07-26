export { default } from "next-auth/middleware";

export const config = {
  // matcher: ["/profile"],
  // matcher: ["/((?!register|api|login).*)"],
  // matcher: [ "/((?!register|api|login).*)"],
  // matcher: [ "/register", "/login"]
  matcher: ["/api", "/dashboard", "/employer", "/user", "/auth", "/login"],
};
