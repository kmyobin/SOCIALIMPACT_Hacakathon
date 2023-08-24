import React, { useRef } from 'react'
import Footer from '../../layout/Footer';
import ex_intro from "../../assets/ex_intro.mp4";
import bag from "../../assets/images/icons/ent.svg";

function EnterpriseContent() {
  return (
    <div className="flex h-full w-full flex-wrap justify-center">
      <div className="relative flex h-full w-full max-w-lg flex-col justify-between overflow-hidden bg-[#ECEFF4]">
        {/*<div className="h-full w-full overflow-y-auto p-10">*/}
        <div className="w-full h-[250px] ">
          <video preload="metadata" controls className="w-screen">
            <source src={ex_intro} type="video/mp4" />
          </video>
        </div>
        <div className="p-10 w-full h-full my-3">
          <h1>
            <span className="text-xl font-bold">권태훈</span>&nbsp;(68세)
          </h1>
          <div className="text-[#505050] text-sm py-1">
            인천광역시 미추홀구 용현1동
          </div>
          <div className="rounded-lg bg-[#D9D9D9] p-5 mt-5  min-h-[230px] ">
            <div className="py-2">
              <div className="flex">
                <div className="w-1/4 flex justify-center items-center">
                  <img
                    src={bag}
                    alt="bag"
                    width={30}
                    height={30}
                    className="rounded-full "
                  />
                </div>
                <div className="w-3/4  flex items-center">교육업 3년</div>
              </div>
            </div>
            <div className="py-2">
              <div className="flex">
                <div className="w-1/4 flex justify-center items-center">
                  <img
                    src={bag}
                    alt="bag"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <div className="w-3/4  flex items-center">일본어 강사 3년</div>
              </div>
            </div>
            <div className="py-2">
              <div className="flex">
                <div className="w-1/4 flex justify-center items-center">
                  <img
                    src={bag}
                    alt="bag"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <div className="w-3/4  flex items-center">정년퇴직</div>
              </div>
            </div>
            <div className="py-2">
              <div className="flex">
                <div className="w-1/4 flex justify-center items-center">
                  <img
                    src={bag}
                    alt="bag"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <div className="w-3/4  flex items-center">OO요양원 업무 2년</div>
              </div>
            </div>
          </div>
        </div>
        {/*</div>*/}
        <Footer />
      </div>
    </div>
  );
}

export default EnterpriseContent
