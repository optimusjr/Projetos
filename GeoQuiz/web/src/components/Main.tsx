import usePodium from "@/hooks/usePodium";
import Podium from "@/components/Podium";
import Quiz from "@/components/Quiz";

const Main = () => {
  const { podium, restart, removeFirstPlace } = usePodium();

  return (
    <main className="flex min-h-[calc(100vh_-_64px)] items-center justify-center bg-slate-200">
      <div className="m-4 flex rounded-lg bg-white shadow-lg">
        <Quiz removeFirstPlace={removeFirstPlace} />
        <Podium podium={podium} restart={restart} />
      </div>
    </main>
  );
};

export default Main;
