import React from "react";
import rightTopBubble from "../../assets/images/rightTopBubble.png";
import centerBubble from "../../assets/images/centerBubble.png";
import personal from "../../assets/images/icons/personal.svg";
import community from "../../assets/images/icons/community.svg";

export default function SelectCategoryContent() {
  return (
    <section className="w-full relative">
      <pre className="font-[700] text-[32px] ml-10 mt-16">
        {"회원 유형을\n선택해주세요."}
      </pre>
      <img
        src={rightTopBubble}
        alt="rightTopBubble"
        className="absolute right-0 top-0"
      />
      <section className="absolute w-full pt-10">
        <img src={centerBubble} alt="centerBubble" className="m-auto" />
        <button className="w-[400px] h-[200px] border-4 border-[#505050] rounded-xl transition-all absolute top-24 left-6 bg-white flex justify-between px-14 items-center hover:border-[#5BBDF4] hover:scale-105">
          <img src={personal} alt="personal" />
          <div className="text-2xl font-bold">구직자(개인)</div>
        </button>
        <button className="w-[400px] h-[200px] border-4 border-[#505050] rounded-xl transition-all absolute top-80 left-6 bg-white flex justify-between px-14 items-center hover:border-[#5BBDF4] hover:scale-105">
          <img src={community} alt="community" />
          <div className="text-2xl font-bold">기업(단체)</div>
        </button>
      </section>
    </section>
  );
}
