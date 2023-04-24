import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

import styles from "./main.module.scss";

let socket: Socket;

interface Competitor {
  id: number;
  name: string;
  time: Date;
}

const Start = () => {
  const [podium, setPodium] = useState([] as Competitor[]);

  const socketInitializer = async () => {
    socket = io("http://localhost:4000");

    socket.on("connect", () => {
      console.log("connected");
    });
  };

  const resetSocketListeners = async () => {
    socket.off("data");
    socket.on("data", (msg) => {
      addToPodium(msg);
    });
  };

  useEffect(() => {
    if (socket === undefined) {
      socketInitializer();
    }
    resetSocketListeners();
  }, []);

  if (socket !== undefined) {
    resetSocketListeners;
  }

  const addToPodium = (msg: string) => {
    console.log(msg);
    setPodium([
      ...podium,
      {
        id: podium.length,
        name: msg,
        time: new Date(),
      },
    ]);
  };

  console.log("Atualizou estado");

  return (
    <main className={styles.main}>
      <h1>Leve o futuro para o seu lar.</h1>
      <p>Transformamos sua casa com as nossas soluções de automação residencial.</p>

      {podium.map((competitor) => (
        <li key={competitor.id}>
          {competitor.name} {competitor.id} {competitor.time.getSeconds()}
        </li>
      ))}
    </main>
  );
};

export default Start;
