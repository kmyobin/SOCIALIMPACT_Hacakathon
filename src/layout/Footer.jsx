import React, {useEffect} from 'react'
import nav_1 from "../assets/images/icons/nav_1.svg";
import nav_1_click from "../assets/images/icons/nav_1_click.svg";
import nav_2 from "../assets/images/icons/nav_2.svg";
import nav_2_click from "../assets/images/icons/nav_2_click.svg";
import nav_3 from "../assets/images/icons/nav_3.svg";
import nav_3_click from "../assets/images/icons/nav_3_click.svg";
import nav_4 from "../assets/images/icons/nav_4.svg";
import nav_4_click from "../assets/images/icons/nav_4_click.svg";
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const onClickNav1 = () => {
    navigate("/history");
  }
  const onClickNav2 = () => {
    navigate("/list");
  };
  const onClickNav3 = () => {
    navigate("/enterprise");

  };
  const onClickNav4 = () => {
    navigate("/mypage");
  };
  const Lo = window.location.href;


  return (
    <nav className="flex h-20 w-full items-center p-[8%] bg-[rgba(100,100,100,0)]">
      <div className="flex justify-between w-full ">
        {Lo.includes("history") ? (
          <img src={nav_1_click} alt="nav_1_click" width={25} height={25} />
        ) : (
          <img
            src={nav_1}
            alt="nav_1"
            width={25}
            height={25}
            onClick={onClickNav1}
            className="cursor-pointer transition-all hover:scale-110"
          />
        )}
        {Lo.includes("list") ? (
          <img src={nav_2_click} alt="nav_2_click" width={25} height={25} />
        ) : (
          <img
            src={nav_2}
            alt="nav_2"
            width={25}
            height={25}
            onClick={onClickNav2}
            className="cursor-pointer transition-all hover:scale-110"
          />
        )}
        {Lo.includes("enterprise") ? (
          <img src={nav_3_click} alt="nav_3_click" width={25} height={25} />
        ) : (
          <img
            src={nav_3}
            alt="nav_3"
            width={25}
            height={25}
            onClick={onClickNav3}
            className="cursor-pointer transition-all hover:scale-110"
          />
        )}
        {Lo.includes("mypage") ? (
          <img src={nav_4_click} alt="nav_4_click" width={25} height={25} />
        ) : (
          <img
            src={nav_4}
            alt="nav_4"
            width={25}
            height={25}
            onClick={onClickNav4}
            className="cursor-pointer transition-all hover:scale-110"
          />
        )}
      </div>
    </nav>
  );
}

export default Footer;
