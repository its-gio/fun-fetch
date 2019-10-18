const http = new EasyHttp;

http.get("https://jsonplaceholder.typicode.com/posts/", 5, (err, res) => err ? console.log(err) : console.log(res));