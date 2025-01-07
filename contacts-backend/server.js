const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT|| 5000;

app.use("/api/contacts",require("./Routes/GetAllRoutes"));

app.listen(port, () => {
    console.log(`serv3r running at port ${port}`)
});
