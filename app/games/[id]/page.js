// app/games/[id]/page.js
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./game.module.css";

// 샘플 게임 데이터
const sampleGames = [
  {
    id: "quiz",
    title: "퀴즈 게임",
    description: "다양한 주제의 재미있는 퀴즈를 풀어보세요!",
    thumbnail: "/images/thumbnails/quiz.jpg",
  },
  // 다른 게임들도 추가...
];

export default function GamePage({ params }) {
  const { id } = params;

  // 게임 찾기
  const game = sampleGames.find((game) => game.id === id);

  // 게임이 없을 경우 404 페이지로 리다이렉트
  if (!game) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backButton}>
        &larr; 홈으로
      </Link>

      <h1 className={styles.title}>{game.title}</h1>
      <p className={styles.description}>{game.description}</p>

      <div className={styles.gameContainer}>
        <div className={styles.gamePlaceholder}>
          {id} 게임이 여기에 표시됩니다.
        </div>
      </div>
    </div>
  );
}
