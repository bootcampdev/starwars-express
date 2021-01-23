const express = require("express");
const app = express();
const PORT = 3000

// request and response
app.get("/", (req, res) => {
    res.send("May the force be behind you!");
})

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})