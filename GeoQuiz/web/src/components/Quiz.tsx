import { FaceFrownIcon } from "@heroicons/react/24/outline";
import useQuiz from "@/hooks/useQuiz";
import Button from "@/components/Button";
import Alternative from "@/components/Alternative";
import { useEffect, useState } from "react";

interface Props {
  removeFirstPlace: () => void;
}

const Quiz = ({ removeFirstPlace }: Props) => {
  const { currentQuestion, goToNextQuestion, isEnd } = useQuiz();

  const [successSound, setSuccessSound] = useState<HTMLAudioElement>();
  const [failSound, setFailSound] = useState<HTMLAudioElement>();

  useEffect(() => {
    setSuccessSound(new Audio("success.mp3"));
    setFailSound(new Audio("fail.mp3"));
  }, []);

  return (
    <div className="flex flex-col px-1 w-128">
      <h2 className="m-6 text-center text-2xl w-full font-semibold text-gray-900">
        Qual a Pergunta?
      </h2>

      <div className="flex flex-col mx-6 items-center h-full">
        {!isEnd ? (
          <>
            <h3 className="m-2 w-full text-xl font-semibold text-gray-900">
              {currentQuestion.question}
            </h3>

            <ol className="w-full list-latin list-inside text-lg text-gray-800">
              {currentQuestion.alternatives.map((alternative, index) => (
                <Alternative
                  key={alternative}
                  alternative={alternative}
                  isRight={index === currentQuestion.right_answer}
                  removeFirstPlace={removeFirstPlace}
                  sounds={{ success: successSound, fail: failSound }}
                />
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

      {!isEnd && (
        <Button onClick={goToNextQuestion} color="green">
          Proxima Questão
        </Button>
      )}
    </div>
  );
};

export default Quiz;
