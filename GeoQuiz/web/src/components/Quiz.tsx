import Button from "./Button";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Competitor from "@/types/competitor";
import questionCollection from "../questions.json";
import { useLocalStorage } from "usehooks-ts";

interface Props {
  podium: Competitor[];
}

const Quiz = ({ podium }: Props) => {
  const [questionList, setQuestionList] = useLocalStorage("questions", questionCollection);

  return (
    <div className="flex flex-col px-1 w-full">
      <h2 className="m-6 text-center text-2xl font-semibold uppercase text-gray-900">Perguntas</h2>

      <div className="flex flex-col items-center h-full">
        {false ? (
          <>
            <h3 className="m-2 w-full text-xl font-semibold text-gray-900">
              {questionList[4].question}
            </h3>

            <ol className="w-full list-latin list-inside text-lg text-gray-800">
              {questionList[4].alternatives.map((alternative) => (
                <li key={alternative}>
                  <button className="hover:font-bold">{alternative}</button>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <div className="w-60 sm:w-72 lg:w-96 flex flex-col justify-center h-full pb-32">
            <FaceFrownIcon className="w-full px-24 sm:px-28 lg:px-40" />
            <p className="px-8 text-center sm:px-16">Oh não!</p>
            <p className="px-8 text-center sm:px-16">Sua coleção de perguntas chegou ao fim.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
