import CompetitorCard from "@/components/competitorCard";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket;

interface Competitor {
  id: number;
  name: string;
  time: Date;
}

const Main = () => {
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

  return (
    <main className="flex min-h-[calc(100vh_-_64px)] items-center justify-center bg-slate-200 p-8">
      {podium.map((competitor) => (
        <li key={competitor.id}>
          {competitor.name} {competitor.id} {competitor.time.getSeconds()}
        </li>
      ))}

      <div className="m-4 flex-col rounded-lg bg-white shadow-lg">
        <h2 className="m-6 text-center text-2xl font-semibold uppercase text-gray-900">
          Classificação
        </h2>
        <CompetitorCard />
        <CompetitorCard />
        <CompetitorCard />
        <CompetitorCard />

        <button className="mx-auto my-6 flex justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
          Resetar
        </button>
      </div>
    </main>
  );
};

export default Main;
