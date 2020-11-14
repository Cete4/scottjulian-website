const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("views"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Import routes and give the server access to them.
const routes = require("./routes/html-routes.js");

app.use(routes);

// Starting our Express app
// =============================================================

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
