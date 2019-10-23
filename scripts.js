const http = new EasyHttp;
const data = {
    name: "Giovani Aguirre",
    email: "media@its-g.io",
    username: "its-gio"
}

// GET
http.get("https://jsonplaceholder.typicode.com/users")
    .then(data =>  console.log(data));
// POST

// PUT

// DELETE