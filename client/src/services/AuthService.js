import axiosInstance from "../axios/axiosInstance";

class AuthService {
  async signUp(user) {
    return await axiosInstance.post("/api/auth/signup", {
      username: user.username,
      password: user.password,
    });
  }

  async signIn(user) {
    return await axiosInstance.post("/api/auth/signin", {
      username: user.username,
      password: user.password,
    });
  }

  async auth(token) {
    if (token) {
      return await axiosInstance.get("/api/auth");
    }
  }
}

export default new AuthService();
