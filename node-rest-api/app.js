const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server listening on port: ", PORT);
});

app.get("/status",(request, response) => {
    response.send("Status: running")
})