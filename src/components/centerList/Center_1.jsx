import React, { useState } from "react";
import center2 from "../../assets/images/centerImages/center2.png";
import ApplyBtn from "../common/ApplyBtn";
import "../../styles/centerIntroduction.css";
import DetailModal from "./DetailModal";

export default function Center_1() {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <section className="w-full h-[814.125px] relative">
      {showDetail && (
        <DetailModal showDetail={showDetail} setShowDetail={setShowDetail} />
      )}
      <img
        src={center2}
        alt="center2"
        className={`w-full h-[70%] object-cover transition-all duration-300 ${
          showDetail ? "brightness-50" : "brightness-100"
        }`}
        onMouseEnter={() => {
          setShowDetail(true);
        }}
      />
      <div className="m-6">
        <div className="title">인하대학교</div>
        <p className="introduction">인천광역시 미추홀구 용현동</p>
      </div>
      <div className="flex justify-center mt-12">
        <ApplyBtn />
      </div>
    </section>
  );
}
