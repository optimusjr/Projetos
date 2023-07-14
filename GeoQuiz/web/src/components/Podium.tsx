import Button from "./Button";
import CompetitorCard from "./CompetitorCard";
import { useLocalStorage } from "usehooks-ts";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import Competitor from "@/types/competitor";

interface Props {
  podium: Competitor[];
  restart: () => void;
}

const Podium = ({ podium, restart }: Props) => {
  const [names, setNames] = useLocalStorage("teamNames", [
    "Equipe 1",
    "Equipe 2",
    "Equipe 3",
    "Equipe 4",
  ]);

  const setName = (competidorId: number, newName: string) => {
    if (competidorId >= 0 && competidorId <= 3) {
      const newNames = [...names];
      newNames[competidorId] = newName;

      setNames(newNames);
    }
  };

  return (
    <div className="flex flex-col px-1 min-h-[600px]">
      <h2 className="m-6 text-center text-2xl font-semibold uppercase text-gray-900">
        Classificação
      </h2>

      {podium.map((competitor, position) => (
        <CompetitorCard
          key={competitor.id}
          podium={podium}
          competidorPosition={position}
          competitor={competitor}
          name={names[competitor.id]}
          setName={setName}
        />
      ))}

      {podium.length === 0 && (
        <div className="w-60 sm:w-72 lg:w-96 flex flex-col justify-center h-full">
          <ArchiveBoxXMarkIcon className="w-full rotate-180 px-24 sm:px-28 lg:px-40" />
          <p className="px-8 text-center sm:px-16">Nenhum botão apertado</p>
        </div>
      )}

      <Button onClick={restart} color="blue">
        Reiniciar
      </Button>
    </div>
  );
};

export default Podium;
