import { TrophyIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const CompetitorCard = () => {
  return (
    <div className="m-6 flex  rounded-lg bg-white shadow-lg">
      <div className="grid w-72 grid-cols-[theme(spacing.12)_1fr] gap-4 px-4 py-6">
        <TrophyIcon className="h-12 w-12 object-cover text-orange-400" />
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Equipe 1</h2>
            <PencilSquareIcon className="mb-auto w-4 text-gray-700" />
          </div>
          <p className="text-gray-700">{new Date().toLocaleTimeString("pt-br")}</p>
        </div>
      </div>
    </div>
  );
};

export default CompetitorCard;
