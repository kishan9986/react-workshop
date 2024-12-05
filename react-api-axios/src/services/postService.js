import axios from "axios";

export class apiService {
  axiosInstance;
  constructor() {
    this.getAPIInstance();
  }

  getAPIInstance() {
    this.axiosInstance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com",
    });
  }

  getPosts = () => {
    return this.axiosInstance.get("/posts");
  };

  createPost = (post) => {
    return this.axiosInstance.post("/posts", post);
  };

  updatePost = (id, post) => {
    return this.axiosInstance.put(`/posts/${id}`, post);
  };

  deletePost = (id) => {
    return this.axiosInstance.delete(`/posts/${id}`);
  };
}
