import React from 'react'
import people from "../../assets/images/icons/list_2.svg";
import AcceptBtn from '../../common/AcceptBtn';

function AgeModal({ setAgeOpen }) {
  const onClickButton = () => {setAgeOpen(false)};
  return (
    <div className='bg-[#f6f6f6]'>
      <div className="flex justify-center items-center mb-3">
        <img src={people} alt="people" width={100} height={100} />
      </div>
      <div>
        <div className="rounded-xl bg-white font-semibold p-3 text-center mb-5 cursor-pointer">
          상관없음
        </div>
        <div className="rounded-xl bg-[#5BBDF4] font-semibold p-3 text-center mb-5 cursor-pointer text-white shadow-md shadow-slate-500">
          50~60대
        </div>
        <div className="rounded-xl bg-[#5BBDF4] font-semibold p-3 text-center mb-5 cursor-pointer text-white shadow-md shadow-slate-500">
          60~70대
        </div>
        <div className="rounded-xl bg-white font-semibold p-3 text-center mb-5 cursor-pointer">
          70대 이상
        </div>
      </div>
      <div className="absolute right-10 bottom-12">
        <button onClick={onClickButton} className="shadow-md shadow-gray-400 w-[140px] h-[35px] p-1 rounded-3xl bg-[#5BBDF4] text-xs font-semibold text-white flex justify-center items-center hover:scale-105  transition-transform duration-200 ease-in-out">
          저장하기
        </button>
      </div>
    </div>
  );
}

export default AgeModal
