import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

import styles from "./main.module.scss";

let socket: Socket;

const Start = () => {
  const [list, setList] = useState([] as string[]);

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    socket = io("http://localhost:4000");

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("data", (text) => {
      console.log(text);
      list.push(text);
      setList(list);
    });
  };

  return (
    <main className={styles.main}>
      <h1>Leve o futuro para o seu lar.</h1>
      <p>Transformamos sua casa com as nossas soluções de automação residencial.</p>

      {list.map((item, index) => (
        <li key={index}> {item}</li>
      ))}
    </main>
  );
};

export default Start;
