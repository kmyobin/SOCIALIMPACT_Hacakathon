import React from 'react'

function AcceptBtn({text}) {
  return (
    <button className="shadow-md shadow-gray-400 w-[140px] h-[35px] p-1 rounded-3xl bg-[#5BBDF4] text-xs font-semibold text-white flex justify-center items-center hover:scale-105  transition-transform duration-200 ease-in-out">
      {text}
    </button>
  );
}

export default AcceptBtn
