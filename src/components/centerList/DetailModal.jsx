import React from "react";
import age from "../../assets/images/icons/age.svg";
import career from "../../assets/images/icons/career.svg";
import money from "../../assets/images/icons/money.svg";
import calendar from "../../assets/images/icons/calendar.svg";

export default function DetailModal({ showDetail, setShowDetail }) {
  return (
    <section
      className={`absolute w-full h-[569.993px] top-0 left-0 bg-transparent z-10 p-8 transition-all duration-300 ${
        showDetail ? "opacity-100" : "opacity-0"
      }`}
      onMouseLeave={() => {
        setShowDetail(false);
      }}
    >
      <pre
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        {"시니어 영어 보조 강사를\n모집합니다."}
      </pre>
      <div className="flex flex-col gap-4 m-auto rounded-lg mt-12">
        <div className="h-16 bg-white w-[90%] ml-5 rounded-2xl flex items-center gap-4">
          <img src={age} alt="age" className="w-6 ml-[18px]" />
          <span className="relative top-[2px] font-semibold">50~70대</span>
        </div>
        <div className="h-16 bg-white w-[90%] ml-5 rounded-2xl flex items-center gap-4">
          <img src={career} alt="career" className="w-6 ml-[18px]" />
          <span className="relative top-[2px] font-semibold">
            경력 3년 이상
          </span>
        </div>
        <div className="h-16 bg-white w-[90%] ml-5 rounded-2xl flex items-center gap-4">
          <img src={money} alt="money" className="w-6 ml-[18px]" />
          <span className="relative top-[2px] font-semibold">9860원(시간)</span>
        </div>
        <div className="h-16 bg-white w-[90%] ml-5 rounded-2xl flex items-center gap-4">
          <img src={calendar} alt="calendar" className="w-6 ml-[18px]" />
          <span className="relative top-[2px] font-semibold">
            6개월, 주말 13시~20시
          </span>
        </div>
      </div>
    </section>
  );
}
