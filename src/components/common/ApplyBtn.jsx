import React from "react";
import styles from "../../styles/ApplyBtn.module.css";

export default function ApplyBtn({ hello, muyaho }) {
  return (
    <button
      onClick={() => {
        hello();
      }}
      className={`${styles.applyBtn} transition-all hover:scale-105 ${
        muyaho ? "bg-[#d9d9d9]" : "bg-[#5bbdf4]"
      }`}
    >
      {muyaho ? "신청완료" : "지원하기"}
    </button>
  );
}
