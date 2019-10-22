class EasyHttp {
  constructor() {
    this.xhr = new XMLHttpRequest;
  }

  get(url, limit, callback) {
    this.xhr.open("GET", url, true);

    this.xhr.onload = () => {
      let data = JSON.parse(this.xhr.responseText).splice(0, limit);
      if (this.xhr.status === 200) {
        callback(null, data);
      } else {
        callback(`Error: GET request fail`);
      }
    }

    this.xhr.send();
  }

  post(url, data, callback) {
    this.xhr.open("POST", url, true);
    this.xhr.setRequestHeader("Content-type", "application/json");

    this.xhr.onload = () => {
        callback(null, JSON.parse(this.xhr.responseText));
    }

    this.xhr.send(JSON.stringify(data));
  }

  put(url, data, callback, index) {
    this.xhr.open("PUT", `${url}/${index}`, true);
    this.xhr.setRequestHeader("Content-type", "application/json");

    this.xhr.onload = () => {
      callback(null, JSON.parse(this.xhr.responseText));
    }

    this.xhr.send(JSON.stringify(data));
  }
}