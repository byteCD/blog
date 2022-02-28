import axiosInstance from "../axios/axiosInstance";

class UserService {
  async getUsers() {
    return await axiosInstance.get(`/api/users`);
  }

  async getUser(id) {
    return await axiosInstance.get(`/api/users/${id}`);
  }
  async getUserPosts(id) {
    return await axiosInstance.get(`/api/users/${id}/posts`);
  }

  async getUserComments(id) {
    return await axiosInstance.get(`/api/users/${id}/comments`);
  }
}

export default new UserService();
