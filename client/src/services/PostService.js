import axiosInstance from "../axios/axiosInstance";

class PostService {
  async getPosts() {
    return await axiosInstance.get(`/api/posts`);
  }

  async getPost(id) {
    return await axiosInstance.get(`/api/posts/${id}`);
  }

  async addPost(post) {
    return await axiosInstance.post(`/api/posts`, post);
  }

  async deletePost(id) {
    return await axiosInstance.delete(`/api/posts/${id}`);
  }

  async editPost(post) {
    return await axiosInstance.put(`/api/posts/${post.id}`, post);
  }

  async getPostComments(id) {
    return await axiosInstance.get(`/api/posts/${id}/comments`);
  }
}

export default new PostService();
