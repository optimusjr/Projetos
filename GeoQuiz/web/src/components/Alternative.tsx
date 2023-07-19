import Competitor from "@/types/competitor";
import { useState } from "react";

enum Status {
  NEUTRAL,
  RIGHT,
  WRONG,
}

interface Props {
  alternative: string;
  isRight: boolean;
  removeFirstPlace: () => void;
  sounds: {
    success?: HTMLAudioElement;
    fail?: HTMLAudioElement;
  };
}

const Alternative = ({ alternative, isRight, removeFirstPlace, sounds }: Props) => {
  const [status, setStatus] = useState(Status.NEUTRAL);

  const clickHandler = () => {
    if (isRight) {
      setStatus(Status.RIGHT);
      sounds.success?.play();
    } else {
      removeFirstPlace();
      setStatus(Status.WRONG);
      sounds.fail?.play();
    }
  };

  let styleClasses =
    status === Status.RIGHT
      ? "font-bold text-green-700"
      : status === Status.WRONG
      ? "line-through text-red-700"
      : "hover:font-bold";

  return (
    <li key={alternative} className={styleClasses}>
      <button className="contents" onClick={clickHandler} disabled={status != Status.NEUTRAL}>
        {alternative}
      </button>
    </li>
  );
};

export default Alternative;