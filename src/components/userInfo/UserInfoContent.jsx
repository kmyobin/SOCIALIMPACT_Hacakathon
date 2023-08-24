import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import handsomeGuy from "../../assets/images/handsomeGuy.png";
import styles from "../../styles/ApplyBtn.module.css";
import location from "../../assets/images/icons/location.svg";
import lecture from "../../assets/images/icons/lecture.svg";
import career from "../../assets/images/icons/career.svg";
import call from "../../assets/images/icons/call.svg";
import findJob from "../../assets/images/findJob.png";
import jobOffer from "../../assets/images/jobOffer.png";
import application from "../../assets/images/application.png";
import myInfo from "../../assets/images/myInfo.png";
import { useNavigate } from "react-router-dom";

const SimpleSlider = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="text-black w-full h-full">
      <Slider ref={(c) => setSliderRef(c)} {...settings}>
        <section className="w-full h-[814.125px] bg-[#5BBDF4] relative">
          <img
            src={handsomeGuy}
            alt="handsomeGuy"
            className="m-auto mt-16 w-28 rounded-full"
          />
          <div className="w-full h-[70%] absolute bottom-0 bg-[#F6F6F6] rounded-2xl flex flex-col">
            <div className="absolute w-[254px] h-14 bg-white rounded-full shadow-lg ml-24 -top-[28px] flex justify-center items-center text-2xl font-bold">
              유종건 (68세)
            </div>
            <div className="w-4/5 h-16 shadow-lg mx-auto mt-12 mb-6 rounded-2xl flex items-center pl-4 gap-4">
              <img src={location} alt="location" className="-ml-1 -mr-2" />
              <span>인천광역시 미추홀구 용현1동</span>
            </div>
            <div className="w-4/5 h-16 shadow-lg mx-auto mb-6 rounded-2xl flex items-center pl-4 gap-4">
              <img src={lecture} alt="lecture" />
              <span>학교, 일본어</span>
            </div>
            <div className="w-4/5 h-16 shadow-lg mx-auto mb-6 rounded-2xl flex items-center pl-4 gap-4">
              <img src={career} alt="career" />
              <span>교직 18년</span>
            </div>
            <div className="w-4/5 h-16 shadow-lg mx-auto mb-6 rounded-2xl flex items-center pl-4 gap-4">
              <img src={career} alt="career" />
              <span>일본어 강사 5년</span>
            </div>
            <div className="w-4/5 h-16 shadow-lg mx-auto mb-2 rounded-2xl flex items-center pl-4 gap-4">
              <img src={call} alt="call" />
              <input
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                placeholder={"010-XXXX-XXXX"}
                className="bg-transparent outline-none"
              />
            </div>
            <button
              className={`${styles.applyBtn} bg-[#5bbdf4] transition-all hover:scale-105 ml-[105px] mt-4`}
              onClick={next}
            >
              제출하기
            </button>
          </div>
        </section>
        <section className="w-full h-[814.125px] bg-[#5BBDF4] relative">
          <img
            src={handsomeGuy}
            alt="handsomeGuy"
            className="m-auto mt-8 w-20 rounded-full"
          />
          <div className="flex flex-col items-center text-white mt-6">
            <h2 className="text-2xl font-bold">유종건 (68세)</h2>
            <p>인천광역시 미추홀구 용현1동</p>
          </div>
          <div className="w-full h-[70%] absolute bottom-0 bg-[#F6F6F6] rounded-2xl">
            <div className="flex justify-center gap-4 mb-4 mt-24">
              <img
                src={application}
                alt="application"
                className="transition-all hover:scale-105 cursor-pointer"
              />
              <img
                src={jobOffer}
                alt="jobOffer"
                className="transition-all hover:scale-105 cursor-pointer"
              />
            </div>
            <div className="flex justify-center gap-4">
              <img
                src={findJob}
                alt="findJob"
                className="transition-all hover:scale-105 cursor-pointer"
                onClick={() => {
                  navigate("/jobseeker");
                }}
              />
              <img
                src={myInfo}
                alt="myInfo"
                className="transition-all hover:scale-105 cursor-pointer"
              />
            </div>
          </div>
        </section>
      </Slider>
    </section>
  );
};

export default SimpleSlider;
