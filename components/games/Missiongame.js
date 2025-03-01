"use client";

import { useState } from "react";
import styles from "./Game.module.css";

const missions = [
  "상대방과 눈싸움 10초 버티기!",
  "가장 최근에 찍은 셀카 보여주기!",
  "주변 사람에게 랜덤하게 하이파이브 요청!",
  "노래 한 소절 부르기!",
  "다음 턴까지 손 머리 위에 올리기!",
  "1분 동안 외계인 말투로 대화하기!",
  "가장 오래된 통화 기록 보여주기!",
  "가장 좋아하는 노래 소개하기!",
  "주변 사람에게 칭찬 한마디 하기!",
  "다음 사람에게 물 한 잔 따라주기!",
  "가장 특이한 버릇 말하기!",
  "10초 동안 아무 말 안 하고 버티기!",
  "가장 창피했던 순간 이야기하기!",
  "즉흥 댄스 5초 선보이기!",
  "다음 라운드까지 엉뚱한 별명으로 불리기!",
  "가장 기억에 남는 여행지 이야기하기!",
  "모두에게 3초 동안 미소 짓기!",
  "양손으로 볼 찌르기 5초!",
  "하트를 손으로 만들어보이기!",
  "가장 최근에 먹은 음식 이야기하기!",
  "친구에게 랜덤 문자 보내기!",
  "지금 생각나는 동물 소리 내기!",
  "가장 좋아하는 영화 장면 따라하기!",
  "자신의 숨겨진 재능 자랑하기!",
  "팀원 중 한 명에게 어깨 안마해주기!",
  "상대방과 가위바위보 한 판!",
  "오늘 있었던 웃긴 일 이야기하기!",
  "자신의 최애 음식 말하기!",
  "핸드폰에 있는 이상한 사진 보여주기!",
  "옆 사람 칭찬 3가지 하기!",
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
      <h1 className={styles.title}>미션 갓챠 게임</h1>
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
