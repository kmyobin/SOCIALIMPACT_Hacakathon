import React from "react";
import Footer from "../../layout/Footer";
import profile from "../../assets/images/profile.jpg";
import profile2 from "../../assets/images/profile_2.png";
import arrow from "../../assets/images/icons/before_arrow.svg";
import next_arrow from "../../assets/images/icons/next_arrow.svg";
function HistoryContent() {
  const onClickArrow = () => {
    console.log("뒤로가기");
  };
  return (
    <div className="flex h-full w-full flex-wrap justify-center">
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#f6f6f6]">
        <div className="h-full w-full overflow-hidden bg-[#5BBDF4]">
          <div className="bg-[#5BBDF4] w-full px-7 flex py-4">
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
            <div className="text-xl w-1/2 flex justify-center items-center text-white text-center font-semibold">
              제의 목록
            </div>
          </div>
          <div
            className="h-full w-full overflow-hidden py-5 px-4 bg-[#f6f6f6] rounded-t-2xl "
            style={{ boxShadow: "0px -3px 0px 0px rgba(0,0,0,0.1)" }}
          >
            <div>
              <div className="bg-white rounded-xl p-3 my-5">
                <div className="flex">
                  <div className="w-1/4 flex justify-center items-center">
                    <img
                      src={profile}
                      alt="profile"
                      className="rounded-full"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="w-2/4 p-3">
                    <div>
                      <span className="text-lg font-extrabold">차은우</span>
                      &nbsp;(80세)
                    </div>
                    <div className=" text-[#505050] text-sm">
                      서울특별시 광진구
                    </div>
                  </div>
                  <div className="w-1/4 flex justify-end">
                    <img
                      src={next_arrow}
                      alt="next_arrow"
                      width={15}
                      height={15}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-3 my-5">
                <div className="flex">
                  <div className="w-1/4 flex justify-center items-center">
                    <img
                      src={profile2}
                      alt="profile2"
                      className="rounded-full"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="w-2/4 p-3">
                    <div>
                      <span className="text-lg font-extrabold">유종건</span>
                      &nbsp;(68세)
                    </div>
                    <div className=" text-[#505050] text-sm whitespace-nowrap	">
                      인천광역시 미추홀구 용현4동
                    </div>
                  </div>
                  <div className="w-1/4 flex justify-end">
                    <img
                      src={next_arrow}
                      alt="next_arrow"
                      width={15}
                      height={15}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HistoryContent;
