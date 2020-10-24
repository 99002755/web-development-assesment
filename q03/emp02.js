const app = require("express")();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Client.html");
})

app.listen(5050, () => {
    console.log("Client App running at 5050");
})