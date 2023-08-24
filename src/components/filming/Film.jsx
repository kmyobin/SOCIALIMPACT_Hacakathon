import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import logo from "../../assets/images/icons/logo.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rightArrow from "../../assets/images/icons/rightArrow.svg";
import mic from "../../assets/images/icons/mic.svg";
import styles from "../../styles/ApplyBtn.module.css";
import { useNavigate } from "react-router-dom";

function Film() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleStartCapture = () => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream);

    mediaRecorderRef.current.ondataavailable = (e) => {
      if (e.data.size > 0) {
        setRecordedChunks((prev) => prev.concat(e.data));
      }
    };

    mediaRecorderRef.current.start();
  };

  const handleStopCapture = () => {
    setCapturing(false);
    mediaRecorderRef.current.stop();
  };

  const handleDownload = () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "1.webm";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full h-[814.125px] relative mt-[600px] muyaho">
      <Webcam audio={true} ref={webcamRef} mirrored={true} />
      {/* {!capturing ? (
      <button onClick={handleStartCapture}>녹화 시작</button>
    ) : (
      <button onClick={handleStopCapture}>녹화 중지</button>
    )}
    {recordedChunks.length > 0 && (
      <button onClick={handleDownload}>다운로드</button>
    )} */}
      <img
        src={logo}
        alt="logo"
        className="absolute animate-pulse left-44 top-[460px] -mt-[600px]"
      />
      <Slider {...settings} ref={sliderRef}>
        <div className="w-full h-56 rounded-2xl flex flex-col items-center bg-white relative">
          <h2 className="text-center text-2xl font-bold mt-4 mb-10">
            정보를 말씀해주세요.
          </h2>
          <h2 className="text-center text-3xl font-bold text-[#5BBDF4] mb-10">
            성함과 나이
          </h2>
          <img
            src={mic}
            alt="mic"
            className="m-auto w-8 cursor-pointer transition-all hover:scale-110"
          />
          <button
            onClick={() => {
              next();
            }}
            className="absolute right-2 top-24 transition-all hover:scale-125"
          >
            <img src={rightArrow} alt="rightArrow" />
          </button>
        </div>
        <div className="w-full h-56 rounded-2xl flex flex-col items-center bg-white relative">
          <h2 className="text-center text-2xl font-bold mt-4 mb-10">
            정보를 말씀해주세요.
          </h2>
          <h2 className="text-center text-3xl font-bold text-[#5BBDF4] mb-10">
            거주 지역
          </h2>
          <img
            src={mic}
            alt="mic"
            className="m-auto w-8 cursor-pointer transition-all hover:scale-110"
          />
          <button
            onClick={() => {
              next();
            }}
            className="absolute right-2 top-24 transition-all hover:scale-125"
          >
            <img src={rightArrow} alt="rightArrow" />
          </button>
        </div>
        <div className="w-full h-56 rounded-2xl flex flex-col items-center bg-white relative">
          <h2 className="text-center text-2xl font-bold mt-4 mb-10">
            정보를 말씀해주세요.
          </h2>
          <h2 className="text-center text-3xl font-bold text-[#5BBDF4] mb-10">
            능력과 특기
          </h2>
          <img
            src={mic}
            alt="mic"
            className="m-auto w-8 cursor-pointer transition-all hover:scale-110"
          />
          <button
            onClick={() => {
              next();
            }}
            className="absolute right-2 top-24 transition-all hover:scale-125"
          >
            <img src={rightArrow} alt="rightArrow" />
          </button>
        </div>
        <div className="w-full h-56 rounded-2xl flex flex-col items-center bg-white relative">
          <h2 className="text-center text-2xl font-bold mt-4 mb-10">
            정보를 말씀해주세요.
          </h2>
          <h2 className="text-center text-3xl font-bold text-[#5BBDF4] mb-10">
            경력
          </h2>
          <button
            className={`${styles.applyBtn} bg-[#5bbdf4] transition-all hover:scale-105 -mt-44 ml-[105px]`}
            onClick={() => {
              navigate("/userinfo");
            }}
          >
            제출하기
          </button>
        </div>
      </Slider>
    </div>
  );
}

export default Film;
