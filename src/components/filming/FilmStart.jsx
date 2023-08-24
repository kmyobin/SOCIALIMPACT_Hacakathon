import React from "react";
import rightTopBubble from "../../assets/images/rightTopBubble.png";
import centerBubble from "../../assets/images/centerBubble.png";
import styles from "../../styles/ApplyBtn.module.css";

export default function FilmStart({ handleNext }) {
  return (
    <section className="w-full h-[814.125px] relative pt-16">
      <pre className="font-[700] text-[32px] ml-10">
        {"잠시 후\n촬영이 시작돼요."}
      </pre>
      <img
        src={rightTopBubble}
        alt="rightTopBubble"
        className="absolute right-0 top-0"
      />
      <section className="absolute w-full pt-10 z-10">
        <img src={centerBubble} alt="centerBubble" className="m-auto" />
        <div className="flex justify-center">
          <button
            className={`${styles.applyBtn} transition-all hover:scale-105 -mt-6`}
            onClick={handleNext}
          >
            다음으로
          </button>
        </div>
      </section>
    </section>
  );
}
