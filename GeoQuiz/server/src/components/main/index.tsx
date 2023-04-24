import { useEffect } from "react";
import { io, Socket } from "socket.io-client";

import styles from "./main.module.scss";

let socket: Socket;

const Start = () => {
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

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
