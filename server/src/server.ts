import app from "./app";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { createServer } from "http";

import { initSocket } from "./socket/socket";

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = createServer(app);

const io = initSocket(server);

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.emit("welcome", "Welcome to MatchFlow!");

  socket.on("hello", (message) => {
    console.log("Message from client:", message);

    io.emit("announcement", "Someone said hello!");
  });

  socket.on("joinMatch", (roomId) => {
    socket.join(roomId);

    console.log(`${socket.id} joined room ${roomId}`);

    io.to(roomId).emit("scoreUpdated", {
      runs: 126,
      wickets: 2,
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const startServer = async () => {
  await connectDB();

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
