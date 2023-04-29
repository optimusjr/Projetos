import Competitor from "@/types/competitor";
import { TrophyIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { useState, SyntheticEvent } from "react";

interface Props {
  name: string;
  setName: (competidorId: number, newName: string) => void;

  podium: Competitor[];
  competitor: Competitor;
  competidorPosition: number;
}

function padNumber(n: number) {
  let string = n.toString();

  while (string.length < 4) {
    string = "0" + string;
  }

  return string;
}

const CompetitorCard = ({ name, setName, podium, competitor, competidorPosition }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const formHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      newName: { value: string };
    };

    setName(competitor.id, target.newName.value);
    setIsEditing(false);
  };

  // Tempo desse competidor menos o tempo do primeiro que apertou o botão
  const timer = new Date(competitor.time - podium[0].time);
  const formattedTimer =
    timer.toLocaleTimeString("pt-br", { timeZone: "UTC" }) +
    ":" +
    padNumber(timer.getMilliseconds());

  const textColor =
    competidorPosition === 0
      ? "text-yellow-500"
      : competidorPosition === 1
      ? "text-zinc-500"
      : competidorPosition === 2
      ? "text-yellow-800"
      : "text-gray-300";

  return (
    <div className="m-6 flex  rounded-lg bg-white shadow-lg">
      <div className="grid w-60 grid-cols-[theme(spacing.12)_1fr] gap-4 px-4 py-6 sm:w-72 lg:w-96">
        <TrophyIcon className={"h-12 w-12 " + textColor} />
        <div>
          <div className="flex items-center justify-between">
            {isEditing ? (
              <>
                <form onSubmit={formHandler}>
                  <input
                    className="block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    name="newName"
                    placeholder={name}
                  />
                </form>
              </>
            ) : (
              <>
                <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
                <PencilSquareIcon
                  className="mb-auto w-4 text-gray-700"
                  onClick={() => setIsEditing(true)}
                />
              </>
            )}
          </div>
          <p className="text-gray-700">{formattedTimer}</p>
        </div>
      </div>
    </div>
  );
};

export default CompetitorCard;
