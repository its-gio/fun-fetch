class EasyHttp {
  constructor() {
    this.xhr = new XMLHttpRequest;
  }
  get(url, limit, callback) {
    this.xhr.open("GET", url, true);

    this.xhr.onload = () => {
      let data = JSON.parse(this.xhr.responseText).splice(0, limit);
      if (this.xhr.status === 200) {
        this.xhr.responseText
        callback(null, data);
      }
    }

    this.xhr.send();
  }
}