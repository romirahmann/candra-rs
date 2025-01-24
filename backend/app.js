const express = require("express");
const app = express();
const cors = require("cors");

const dataRoutes = require("./src/routes/master_routes/routes.data");

const mainRoutes = require("./src/routes/routes");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const allRoutes = dataRoutes.map((route) => ({
    status: true,
    api: `http://192.168.9.192:3000/api/master${route.path}`,
    method: route.method,
  }));

  res.status(200).json(allRoutes);
});

app.use("/api/", mainRoutes);

app.get("*", (req, res) => {
  res.redirect("/api/error");
});

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(
    `Backend is Running on PORT: ${PORT}. ${
      process.env.DEV == "TRUE" ? "<Development Mode>" : ""
    }`
  );
});
