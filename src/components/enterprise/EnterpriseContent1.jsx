import React, { useState } from "react";
import Footer from "../../layout/Footer";
import ex_intro from "../../assets/ex_intro.mp4";
import bag from "../../assets/images/icons/ent.svg";
import AcceptBtn from "../../common/AcceptBtn";
import list_5 from "../../assets/images/icons/list_5.svg";
import ent_logo from "../../assets/images/icons/ent_logo.svg";
import TelPopupContent from "./TelPopupContent";

function EnterpriseContent1() {
  const [popOpen, setPopOpen] = useState(false);
  const onClickContact = () => {
    setPopOpen(true);
  };

  return (
    <section className="relative w-full h-[742px]">
      <div className="">
        {popOpen && <TelPopupContent setPopOpen={setPopOpen} name={"유종건"} />}
      </div>
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#f6f6f6]">
        <div className="w-full h-[210px] z-0">
          <video preload="metadata" controls className="w-screen">
            <source src={ex_intro} type="video/mp4" />
          </video>
        </div>

        <div className="rounded-t-xl px-8 pt-10 w-full h-full bg-[#F6F6F6] z-10 relative">
          <div className="z-20 absolute right-12 -top-9">
            <img src={ent_logo} alt="ent_logo" width={80} height={80} />
          </div>
          <h1>
            <span className="text-xl font-bold">유종건</span>&nbsp;(68세)
          </h1>
          <div className="text-[#505050] text-xs py-1 pb-5">
            인천광역시 미추홀구 용현1동
          </div>
          <div className="rounded-lg py-5 px-3 min-h-[230px] ">
            <div className="rounded-xl shadow-md shadow-slate-500 mb-5">
              <div className="py-3">
                <div className="flex">
                  <div className="w-1/4 flex justify-center items-center">
                    <img
                      src={list_5}
                      alt="list_5"
                      width={25}
                      height={25}
                      className="rounded-full "
                    />
                  </div>
                  <div className="w-3/4  flex items-center">학교, 일본어</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl shadow-md shadow-slate-500 mb-5">
              <div className="py-3">
                <div className="flex">
                  <div className="w-1/4 flex justify-center items-center">
                    <img
                      src={bag}
                      alt="bag"
                      width={25}
                      height={25}
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-3/4  flex items-center">교직 18년</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl shadow-md shadow-slate-500 mb-5">
              <div className="py-3">
                <div className="flex">
                  <div className="w-1/4 flex justify-center items-center">
                    <img
                      src={bag}
                      alt="bag"
                      width={25}
                      height={25}
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-3/4  flex items-center">
                    일본어 강사 5년
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-12 right-5">
            <button
              onClick={onClickContact}
              className="shadow-md shadow-gray-400 w-[140px] h-[35px] p-1 rounded-3xl bg-[#5BBDF4] text-xs font-semibold text-white flex justify-center items-center hover:scale-105  transition-transform duration-200 ease-in-out"
            >
              연락하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnterpriseContent1;
