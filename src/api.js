const URL = "http://localhost:7777";

export default class API {
  static getPosts() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `${URL}/posts`);
      xhr.responseType = "json";

      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      });
      xhr.send();
    });
  }

  static createUpdatePost(content) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", `${URL}/posts`);
      xhr.responseType = "json";
      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      });
      const body = JSON.stringify(content);
      xhr.send(body);
    });
  }
  static deletePost(id) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("DELETE", `${URL}/posts/${id}`);
      xhr.responseType = "json";

      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      });
      xhr.send();
    });
  }
}
