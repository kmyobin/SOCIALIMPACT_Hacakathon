import React from "react";
import cancel from "../../assets/images/icons/cancel.svg";
function TelPopupContent({ setPopOpen }) {
  const onClickCancel = () => {
    setPopOpen(false);
  };
  setTimeout(function () {
    const element = document.querySelector(".scale-0");
    if (element) {
      element.classList.remove("scale-0");
      element.classList.add("scale-100");
    }
  }, 100);

  return (
    <div className="absolute top-0 left-0 rounded-2xl w-full h-full z-30 bg-[rgba(0,0,0,0.4)]  flex justify-center items-center transition ease-in-out delay-150">
      <div className="relative w-[80%]  max-h-[80%] rounded-xl bg-white z-20 scale-0 transform transition-transform duration-1000  p-10 py-16 text-center">
        <img
          onClick={onClickCancel}
          src={cancel}
          width={15}
          height={15}
          alt="cancel"
          className="absolute top-3 right-3 cursor-pointer"
        />
        <h1 className="text-[#5BBDF4] font-black text-xl">010-0000-0000</h1>
        <div className="mt-2">유종건 님의 연락처입니다.</div>
      </div>
    </div>
  );
}

export default TelPopupContent;
