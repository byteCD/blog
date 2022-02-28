import axiosInstance from "../axios/axiosInstance";

class CommentService {
  async addComment(comment) {
    return await axiosInstance.post(`/api/comments/${comment.post}`, {
      text: comment.text,
    });
  }

  async deleteComment(id) {
    return await axiosInstance.delete(`/api/comments/${id}`);
  }

  async editComment(comment) {
    return await axiosInstance.put(`/api/comments/${comment.id}`, {
      text: comment.text,
    });
  }
}

export default new CommentService();
