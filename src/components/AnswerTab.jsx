/* eslint-disable react/prop-types */

import { useState } from "react";

function AnswerTab({ answer, index }) {
  const [answerIndex, setAnswerIndex] = useState(null);

  return (
    <button
      // removed bbh and bbf
      className={` bcp bbq ww buf rs bbe bfj bfl ${
        answerIndex === index
          ? "outline-[#0b3947] outline-2"
          : "outline-[#d5e1e2] outline-1 font-normal"
      } rt wn bua fq bne bnm flex gap-4 justify-start content-center`}
      data-handle="boolean-No, I haven't left my home country"
      onClick={() => setAnswerIndex(index)}
    >
      <span
        className={`${
          answerIndex === index ? "border-[6px]" : "border-[1px]"
        } border-[#0b3947]  rounded-full w-5 h-5`}
      ></span>
      {answer}
    </button>
  );
}

export default AnswerTab;
