"use client";

import { useState } from "react";
import styles from "./Game.module.css";

const missions = [
  "10분 동안 왼쪽 사람 호칭 공주님이라고 하기",
  "10분 동안 존댓말/반말 쓰기",
  "10분 동안 모든 영어 금지!",
  "반대편 사람과 15초 동안 아이컨텍",
  "5분 동안 동물 울음 소리로 대답하기 \n(ex 술 더 시킬까? 왈왈왈)",
  "10분 동안 모든 말 끝에 '냥' 붙이기 \n(ex 술달라냥!)",
  "옆 테이블 가서 술 한잔 받아먹기",
  "서빙하러 오는 직원 인스타 물어보기",
  "왼쪽에 있는 사람보다 손 작으면 마시기",
  "아이스크림 쏘기~",
  "오른쪽 사람에게 애교부리기 \n(오른쪽 사람이 무표정이면 마셔)",
  "친구한테 전화해서 '사랑해' 단어 듣기",
  "5분 동안 웃지 않기",
];

export default function MissionGame() {
  const [mission, setMission] = useState(null);
  const [isShaking, setIsShaking] = useState(false);

  const drawMission = () => {
    setIsShaking(true);
    setTimeout(() => {
      const randomMission =
        missions[Math.floor(Math.random() * missions.length)];
      setMission(randomMission);
      setIsShaking(false);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>미션 게임</h1>
      <div
        className={`${styles.gachaMachine} ${isShaking ? styles.shake : ""}`}
        onClick={drawMission}
      >
        <div className={styles.handle}></div>
        <div className={styles.window}>
          {mission ? mission : "클릭해서 미션 뽑기!"}
        </div>
      </div>
      <p className={styles.missionText}>쫄리면 마시던가~ 아가얌</p>
    </div>
  );
}
