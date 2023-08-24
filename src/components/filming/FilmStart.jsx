import React from "react";
import rightTopBubble from "../../assets/images/rightTopBubble.png";
import centerBubble from "../../assets/images/centerBubble.png";
import styles from "../../styles/ApplyBtn.module.css";
import logo from "../../assets/images/icons/ent_logo.svg";

export default function FilmStart({ handleNext }) {
  return (
    <section className="w-full h-[814.125px] relative pt-16">
      <pre className="font-[700] text-[32px] ml-20">
        {"곧 촬영이 시작됩니다."}
      </pre>
      <img src={logo} alt="logo" className="w-48 m-auto my-28" />
      <pre className="font-[500] text-[24px] ml-[80px] mb-20">
        {"조용한 장소로 이동해 주세요."}
      </pre>
      <section className="absolute w-full pt-10 z-10">
        <div className="flex justify-center">
          <button
            className={`${styles.applyBtn} bg-[#5bbdf4] transition-all hover:scale-105 -mt-6`}
            onClick={handleNext}
          >
            다음으로
          </button>
        </div>
      </section>
    </section>
  );
}
