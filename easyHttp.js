class EasyHttp {
  get(url) {
    return new Promise((res, rej) => {
      fetch(url)
        .then(blob => blob.json())
        .then(data => res(data))
        .catch(err => rej(err));
    })
  }

  post(url, data) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(blob => blob.json())
        .then(data => res(data))
        .catch(err => rej(err));
    })
  }

  put(url, index, data) {
    return new Promise((res, rej) => {
      fetch(`${url}/${index}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(blob => blob.json())
        .then(data => res(data))
        .catch(err => rej(err));
    })
  }
}