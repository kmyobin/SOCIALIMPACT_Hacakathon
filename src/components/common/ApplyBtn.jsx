import React from "react";
import styles from "../../styles/ApplyBtn.module.css";

export default function ApplyBtn() {
  return (
    <button className={`${styles.applyBtn} transition-all hover:scale-105`}>
      지원하기
    </button>
  );
}
