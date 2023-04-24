import { useEffect } from "react";
import { io, Socket } from "socket.io-client";

import styles from "./main.module.scss";

let socket: Socket;

const Start = () => {
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    console.log("bbbbbbbbbb");

    socket = io("http://localhost:3000", {
      path: "/api/socket",
    });

    socket.on("connect", () => {
      console.log("connected");
    });
  };

  return (
    <main className={styles.main}>
      <h1>Leve o futuro para o seu lar.</h1>
      <p>Transformamos sua casa com as nossas soluções de automação residencial.</p>
    </main>
  );
};

export default Start;
