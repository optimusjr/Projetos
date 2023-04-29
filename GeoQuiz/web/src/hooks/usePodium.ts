import Competitor from "@/types/competitor";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket;

const usePodium = () => {
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
      if (msg.startsWith("c-")) {
        const competitorId = +msg[2];
        // Limitar o nº de competidores a 4
        if (competitorId <= 3) {
          addToPodium(+msg[2]);
        }

        if (podium.length > 5) {
          reset();
        }
      }
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

  const addToPodium = (competitorId: number) => {
    setPodium((podium) => {
      // Checar se o competidor já não está no podium em outra posição
      if (podium.some((e) => e.id === competitorId)) {
        return podium;
      } else {
        const newCompetitor: Competitor = {
          id: competitorId,
          time: new Date().getTime(),
        };

        return [...podium, newCompetitor];
      }
    });
  };

  const reset = () => {
    setPodium([]);
  };

  return {
    podium,
    reset,
  };
};

export default usePodium;
