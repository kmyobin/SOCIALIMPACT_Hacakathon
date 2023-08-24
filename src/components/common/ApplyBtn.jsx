import React, { useState } from "react";
import styles from "../../styles/ApplyBtn.module.css";

export default function ApplyBtn() {
  const [applied, setApplied] = useState(false);
  return (
    <button
      onClick={() => {
        setApplied(true);
      }}
      className={`${styles.applyBtn} transition-all hover:scale-105 ${
        applied ? "bg-[#d9d9d9]" : "bg-[#5bbdf4]"
      }`}
    >
      {applied ? "신청완료" : "지원하기"}
    </button>
  );
}
