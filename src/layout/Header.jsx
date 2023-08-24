import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//const api_end_point = "http://www.cookie-server.shop:9000";

function Header() {
  const navigate = useNavigate();
  
  const Lo = window.location.pathname;

  return (
    <nav className="flex h-20 w-full items-center p-[8%] bg-[rgba(100,100,100,0)]">
      <div className="flex justify-between w-full ">
        <div className="flex justify-center items-center">
          헤더
        </div>
        <div>
          헤더
        </div>
      </div>
    </nav>
  );
}

export default Header;
