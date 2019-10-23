class EasyHttp {
  get(url) {
    return new Promise((res, rej) => {
      fetch(url)
        .then(blob => blob.json())
        .then(data => res(data))
        .catch(err => rej(err));
    })
  }
}