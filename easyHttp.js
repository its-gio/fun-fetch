class EasyHttp {
  async get(url) {
      return await fetch(url)
        .then(blob => blob.json())
        .then(data => data)
        .catch(err => err);
  }

  async post(url, data) {
      return await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(blob => blob.json())
        .then(data => data)
        .catch(err => err);
  }

  async put(url, index, data) {
      return await fetch(`${url}/${index}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(blob => blob.json())
        .then(data => data)
        .catch(err => err);
  }

  async delete(url, index) {
      return await fetch(`${url}/${index}`, {
        method: "DELETE"
      })
        .then(() => `Deleted: Item at index ${index}`)
        .catch(err => err);
  }
}