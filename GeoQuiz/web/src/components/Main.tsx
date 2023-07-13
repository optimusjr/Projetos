import Button from "./Button";
import CompetitorCard from "./CompetitorCard";
import { useLocalStorage } from "usehooks-ts";
import usePodium from "@/hooks/usePodium";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import Podium from "@/components/Podium";

const Main = () => {
  const { podium, restart } = usePodium();

  return (
    <main className="flex min-h-[calc(100vh_-_64px)] items-center justify-center bg-slate-200 p-8">
      <div className="m-4 flex-col rounded-lg bg-white shadow-lg">
        <Podium podium={podium} restart={restart} />
      </div>
    </main>
  );
};

export default Main;
