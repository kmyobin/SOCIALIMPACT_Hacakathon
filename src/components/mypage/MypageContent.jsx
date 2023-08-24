import React from 'react'
import Footer from '../../layout/Footer';
import arrow from "../../assets/images/icons/before_arrow.svg";
import company from "../../assets/images/company.png"
import list_1 from "../../assets/images/icons/list_1.svg"
import list_2 from "../../assets/images/icons/list_2.svg"
import list_3 from "../../assets/images/icons/list_3.svg"
import list_4 from "../../assets/images/icons/ent.svg"
import list_5 from "../../assets/images/icons/list_5.svg"
import list_6 from "../../assets/images/icons/list_6.svg"
import list_7 from "../../assets/images/icons/list_7.svg";
import phone from "../../assets/images/icons/phone.svg";

function MypageContent() {
  const onClickArrow = () => {
    console.log("뒤로가기")
  }
  return (
    <div className="flex h-full w-full flex-wrap justify-center">
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#f6f6f6]">
        <div className="bg-[#5BBDF4] h-full w-full overflow-hidden">
          <div className="bg-[#5BBDF4] w-full h-[20%] px-7 flex py-2">
            <div className="w-1/4 flex justify-start items-center">
              <img
                src={arrow}
                alt="arrow"
                width={12}
                height={12}
                className="cursor-pointer"
                onClick={onClickArrow}
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center text-white">
              <img
                src={company}
                alt="company"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div className="text-center font-semibold">인하영어센터</div>
              <div className="font-light text-xs text-center">
                인천광역시 미추홀구 용현1동
              </div>
            </div>
          </div>
          <div
            className="h-[80%] w-full overflow-hidden p-10 bg-[#f6f6f6] rounded-t-2xl"
            style={{ boxShadow: "0px -3px 0px 0px rgba(0,0,0,0.1)" }}
          >
            <div className="flex justify-end pb-2">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-md font-semibold pr-2">
                    취업 신청 받기
                  </span>
                  <input type="checkbox" className="toggle toggle-info" />
                </label>
              </div>
            </div>
            <div className="h-[450px] overflow-y-scroll font-bold">
              <div className="text-[#505050] text-md font-semibold mb-2 px-2">
                구직자 필터
              </div>
              <div className="drop-shadow-md shadow-gray-300 mb-5 rounded-2xl p-3 bg-white flex py-5">
                <div className="w-1/5 justify-center items-center flex">
                  <img src={list_2} alt="list_2" width={25} height={25} />
                </div>
                <div className="w-4/5">50~70대</div>
              </div>
              <div className="drop-shadow-md shadow-gray-300 mb-5 rounded-2xl p-3 bg-white flex py-5">
                <div className="w-1/5 justify-center items-center flex">
                  <img src={list_3} alt="list_3" width={25} height={25} />
                </div>
                <div className="w-4/5">인천광역시 미추홀구 용현1동</div>
              </div>
              <div className="drop-shadow-md shadow-gray-300 mb-5 rounded-2xl p-3 bg-white flex py-5">
                <div className="w-1/5 justify-center items-center flex">
                  <img src={list_4} alt="list_4" width={25} height={25} />
                </div>
                <div className="w-4/5">경력 10년 이상</div>
              </div>
              <div className="drop-shadow-md shadow-gray-300 mb-5 rounded-2xl p-3 bg-white flex py-5">
                <div className="w-1/5 justify-center items-center flex">
                  <img src={list_5} alt="list_5" width={25} height={25} />
                </div>
                <div className="w-4/5">학교, 일본어</div>
              </div>

              <div className="text-[#505050] text-md font-semibold mb-2 px-2">
                채용 정보
              </div>
              <div className="drop-shadow-md shadow-gray-300 mb-5 rounded-2xl p-3 bg-white flex py-5">
                <div className="w-1/5 justify-center items-center flex">
                  <img src={list_6} alt="list_6" width={25} height={25} />
                </div>
                <div className="w-4/5">9860원(시간)</div>
              </div>

              <div className="drop-shadow-md shadow-gray-300 mb-5 rounded-2xl p-3 bg-white flex py-5">
                <div className="w-1/5 justify-center items-center flex">
                  <img src={list_7} alt="list_7" width={25} height={25} />
                </div>
                <div className="w-4/5">6개월, 주말 13시~20시</div>
              </div>
              <div className="drop-shadow-md shadow-gray-300 mb-5 rounded-2xl p-3 bg-white flex py-5 ">
                <div className="w-1/5 justify-center items-center flex">
                  <img src={list_1} alt="list_1" width={25} height={25} />
                </div>
                <div className="w-4/5">시니어 영어 보조 강사 모집합니다.</div>
              </div>
              <div className="drop-shadow-md shadow-gray-300 mb-5 rounded-2xl p-3 bg-white flex py-5 ">
                <div className="w-1/5 justify-center items-center flex">
                  <img src={phone} alt="phone" width={25} height={25} />
                </div>
                <div className="w-4/5">010-0000-0000</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MypageContent
