const express = require("express");
const app = express();
app.use(express.json());

const productRouter = require("./src/products/routes");
const userRouter = require("./src/users/routes");
const adminRouter = require("./src/Admin/routes");

const port = 3000;
app.listen(port, () => {
  console.log("server listening to port: ", port);
});

app.get("/status", (request, response) => [response.send("status: running")]);
app.use("/admin", adminRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);
