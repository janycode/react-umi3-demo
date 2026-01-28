export default {
    "GET /users": { name: "jerry", age: 22, location: "china" },

    'POST /users/login': (req, res) => {
        console.log(req.body);
        if (req.body.username === "admin" && req.body.password === "123") {
            res.send({ ok: 1 })
        } else {
            res.send({ ok: 0 })
        }
    }
}