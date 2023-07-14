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
}

const Alternative = ({ alternative, isRight }: Props) => {
  const [status, setStatus] = useState(Status.NEUTRAL);

  const clickHandler = () => {
    if (isRight) {
      setStatus(Status.RIGHT);
    } else {
      setStatus(Status.WRONG);
    }
  };

  let styleClasses =
    status === Status.RIGHT
      ? "font-bold text-green-700"
      : status === Status.WRONG
      ? "line-through text-red-700"
      : "hover:font-bold";

  return (
    <li key={alternative}>
      <button className={styleClasses} onClick={clickHandler}>
        {alternative}
      </button>
    </li>
  );
};

export default Alternative;
