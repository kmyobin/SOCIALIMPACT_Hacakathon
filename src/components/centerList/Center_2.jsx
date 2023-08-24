import React, { useEffect, useState } from "react";
import center1 from "../../assets/images/centerImages/center1.png";
import ApplyBtn from "../common/ApplyBtn";
import "../../styles/centerIntroduction.css";
import DetailModal from "./DetailModal";

export default function Center_2() {
  const [showDetail, setShowDetail] = useState(false);
  const [applied, setApplied] = useState(false);
  const [muyaho, setMuyaho] = useState(false);
  const hello = () => {
    setApplied(true);
  };
  useEffect(() => {
    if (applied) setMuyaho(true);
  }, [applied]);

  return (
    <section className="w-full h-[814.125px] relative">
      {showDetail && (
        <DetailModal showDetail={showDetail} setShowDetail={setShowDetail} />
      )}
      <img
        src={center1}
        alt="center1"
        className={`w-full h-[70%] object-cover transition-all duration-300 ${
          showDetail ? "brightness-50" : "brightness-100"
        }`}
        onMouseEnter={() => {
          setShowDetail(true);
        }}
      />
      <div className="m-6">
        <div className="title">인하영어센터</div>
        <p className="introduction">인천광역시 미추홀구 용현1동</p>
      </div>
      <div className="flex justify-center mt-12">
        <ApplyBtn hello={hello} applied={applied} muyaho={muyaho} />
      </div>
    </section>
  );
}
