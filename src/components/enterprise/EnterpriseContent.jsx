import React, { useRef } from 'react'
import Footer from '../../layout/Footer';
import ex_intro from "../../assets/ex_intro.mp4";
import bag from "../../assets/images/icons/ent.svg";
import AcceptBtn from '../../common/AcceptBtn';
import list_5 from "../../assets/images/icons/list_5.svg"
import ent_logo from "../../assets/images/icons/ent_logo.svg"

function EnterpriseContent() {
  return (
    <div className="flex h-full w-full flex-wrap justify-center">
      <div className="relative flex h-full w-full max-w-lg flex-col justify-between overflow-hidden bg-[#f6f6f6]">
        <div className="w-full h-[210px] z-0">
          <video preload="metadata" controls className="w-screen">
            <source src={ex_intro} type="video/mp4" />
          </video>
        </div>

        <div className="rounded-t-xl px-8 pt-10 w-full h-full bg-[#F6F6F6] z-40 relative">
          <div className='z-50 absolute right-12 -top-9'>
            <img src={ent_logo} alt="ent_logo" width={80} height={80}/>
          </div>
          <h1>
            <span className="text-xl font-bold">권태훈</span>&nbsp;(68세)
          </h1>
          <div className="text-[#505050] text-xs py-1 pb-5">
            인천광역시 미추홀구 용현1동
          </div>
          <div className="rounded-lg py-5 px-3 min-h-[230px] ">
            <div className="rounded-xl shadow-md shadow-slate-500 mb-5">
              <div className="py-2">
                <div className="flex">
                  <div className="w-1/4 flex justify-center items-center">
                    <img
                      src={list_5}
                      alt="list_5"
                      width={30}
                      height={30}
                      className="rounded-full "
                    />
                  </div>
                  <div className="w-3/4  flex items-center">교육업, 일본어</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl shadow-md shadow-slate-500 mb-5">
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
                  <div className="w-3/4  flex items-center">교직 18년</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl shadow-md shadow-slate-500 mb-5">
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
                  <div className="w-3/4  flex items-center">
                    일본어 강사 5년
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className="flex justify-end">
              <AcceptBtn text={"연락하기"} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default EnterpriseContent
