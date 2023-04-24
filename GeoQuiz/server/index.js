const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

// Setup Server
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, { cors: {} });

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(4000, () => {
  console.log("listening on 4000");
});

// Setup Serial Port
const { ReadlineParser, SerialPort } = require("serialport");

const port = new SerialPort({
  path: "/dev/ttyUSB0",
  baudRate: 115200,
});

const parser = port.pipe(new ReadlineParser("\n"));

port.on("open", () => {
  console.log("Porta Serial Aberta (Arduíno conectado com sucesso)");
});

// Listen to serial port

parser.on("data", async (text) => {
  console.log("[Arduino] ", text);

  io.emit("data", text);
});
