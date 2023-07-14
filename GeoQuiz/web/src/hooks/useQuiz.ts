import { useEffect, useState } from "react";
import questionCollection from "../questions.json";
import { useLocalStorage } from "usehooks-ts";

// min and max included
function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(1, 6);

const useQuiz = () => {
  const [askedQuestions, setAskedQuestions] = useLocalStorage("Asked questions", [] as number[]);
  const [currentQuestionPosition, setCurrentQuestionPosition] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const goToNextQuestion = () => {
    let newAskedQuestionsList = askedQuestions;

    if (askedQuestions.indexOf(currentQuestionPosition) === -1) {
      newAskedQuestionsList.push(currentQuestionPosition);
      setAskedQuestions(newAskedQuestionsList);
    }

    if (newAskedQuestionsList.length >= questionCollection.length) {
      setIsEnd(true);
      return;
    }

    let newQuestionPosition: number;
    do {
      newQuestionPosition = randomIntFromInterval(1, questionCollection.length - 1);
    } while (
      (newQuestionPosition === currentQuestionPosition ||
        askedQuestions.includes(newQuestionPosition)) &&
      askedQuestions.length + 1 < questionCollection.length
    );

    setCurrentQuestionPosition(newQuestionPosition);
  };

  return {
    currentQuestion: questionCollection[currentQuestionPosition],
    goToNextQuestion: goToNextQuestion,
    isEnd: isEnd,
  };
};

export default useQuiz;
