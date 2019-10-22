const http = new EasyHttp;
const data = {
    title: "This is the test title!",
    body: "This is the test body!"
}

// GET
// http.get("https://jsonplaceholder.typicode.com/posts/", 5, (err, res) => err ? console.log(err) : console.log(res));

// POST
// http.post("https://jsonplaceholder.typicode.com/posts/", data, (err, res) => err ? console.log(err) : console.log(res));

// PUT
// http.put("https://jsonplaceholder.typicode.com/posts/", data, (err, res) => err ? console.log(err) : console.log(res), 4);

// DELETE
// http.delete("https://jsonplaceholder.typicode.com/posts/", (err, res) => err ? console.log(err) : console.log(res), 4);