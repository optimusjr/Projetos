import usePodium from "@/hooks/usePodium";
import Podium from "@/components/Podium";
import Quiz from "@/components/Quiz";

const Main = () => {
  const { podium, restart } = usePodium();

  return (
    <main className="flex min-h-[calc(100vh_-_64px)] items-center justify-center bg-slate-200">
      <div className="m-4 flex rounded-lg bg-white shadow-lg">
        <Podium podium={podium} restart={restart} />
        <Quiz podium={podium} />
      </div>
    </main>
  );
};

export default Main;
