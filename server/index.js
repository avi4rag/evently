const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5174;

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, "data", "bookings.json");

function readData() {
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.get("/api/bookings", (req, res) => {
  const data = readData();
  res.json(data);
});

app.delete("/api/bookings/:id", (req, res) => {
  const id = req.params.id;
  let data = readData();
  const exists = data.some((b) => b.id === id);
  if (!exists) return res.status(404).json({ error: "Not found" });
  data = data.filter((b) => b.id !== id);
  writeData(data);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Evently stub API running on http://localhost:${PORT}`);
});
