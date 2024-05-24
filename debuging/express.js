const express = require("express");
const app = express();
const port = 3000;

// Middleware untuk menangani error
function errorHandler(err, req, res, next) {
  // Menampilkan pesan error tanpa stack trace
  console.error("Error occurred:", err.message);
  res.status(500).send("Something went wrong. Please try again later.");
}

// Rute yang menyebabkan error
app.get("/error", (req, res) => {
  try {
    // Ini adalah contoh error runtime, seperti pembagian dengan 0
    const obj = {};
    console.log(obj.x);
    const arr = null;
    console.log(arr.length);
    const result = 10 / 0; // Error terjadi di sini
    res.send(`Result: ${result}`);
  } catch (error) {
    //console.log(error);
  }
});

// Middleware untuk menangani rute yang tidak ditemukan
app.use((req, res, next) => {
  res.status(404).send("Sorry, we cannot find that!");
});

// Middleware untuk menangani error
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
