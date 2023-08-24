import React from "react";

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
      <div className="w-[350px] h-[350px] bg-white m-auto rounded-lg mt-12">
        급여 뭐시기 근무시간 뭐시기 근무기간 뭐시기
      </div>
    </section>
  );
}
