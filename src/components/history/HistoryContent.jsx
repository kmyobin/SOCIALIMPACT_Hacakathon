import React from 'react'
import Footer from '../../layout/Footer';
import profile from "../../assets/images/profile.jpg"
import profile2 from "../../assets/images/profile_2.png"

function HistoryContent() {
  return (
    <div className="flex h-full w-full flex-wrap justify-center">
      <div className="relative flex h-full w-full max-w-lg flex-col justify-between overflow-hidden bg-[#ECEFF4]">
        <div className="h-full w-full overflow-y-auto p-10">
          <h1 className="font-black text-xl">조회 기록</h1>
          <div className="py-3">
            <div className="rounded-lg bg-[#D9D9D9] p-3 my-5">
              <div className="flex">
                <div className="w-1/4">
                  <img
                    src={profile}
                    alt="profile"
                    className="rounded-full"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="w-3/4 py-3">
                  <div>
                    <span className="text-lg font-extrabold">차은우</span>
                    &nbsp;(80세)
                  </div>
                  <div className=" text-[#505050] text-sm">
                    서울특별시 광진구
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-[#D9D9D9] p-3">
              <div className="flex">
                <div className="w-1/4">
                  <img
                    src={profile2}
                    alt="profile2"
                    className="rounded-full"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="w-3/4 py-3">
                  <div>
                    <span className="text-lg font-extrabold">권태훈</span>
                    &nbsp;(68세)
                  </div>
                  <div className=" text-[#505050] text-sm">
                    인천광역시 미추홀구 용현1동
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

export default HistoryContent
