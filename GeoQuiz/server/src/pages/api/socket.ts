import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";

interface Response extends NextApiResponse {
  websocket?: {
    io: Server;
  };
}

const SocketHandler = (req: NextApiRequest, res: Response) => {
  if (res.websocket?.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server();
    res.websocket = { io };

    io.on("connection", (socket) => {
      socket.on("input-change", (msg) => {
        socket.broadcast.emit("update-input", msg);
      });
    });
  }

  res.status(200).end();
};

export default SocketHandler;
