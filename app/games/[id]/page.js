// app/games/[id]/page.js
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./game.module.css";
import Missiongame from "@/components/games/Missiongame";

const games = {
  missiongame: Missiongame,
};

export default function GamePage({ params }) {
  const { id } = params;
  const SelectedGame = games[id];

  if (!SelectedGame) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backButton}>
        &larr; 홈으로
      </Link>
      <SelectedGame />
    </div>
  );
}

// // 샘플 게임 데이터
// const sampleGames = [
//   {
//     id: "quiz",
//     title: "퀴즈 게임",
//     description: "다양한 주제의 재미있는 퀴즈를 풀어보세요!",
//     thumbnail: "/images/thumbnails/quiz.jpg",
//   },
//   {
//     id: "memory",
//     title: "메모리 게임",
//     description: "카드를 짝지어 기억력을 테스트해보세요!",
//     thumbnail: "/images/thumbnails/memory.jpg",
//   },
//   {
//     id: "puzzle",
//     title: "퍼즐 게임",
//     description: "두뇌를 자극하는 퍼즐을 풀어보세요!",
//     thumbnail: "/images/thumbnails/puzzle.jpg",
//   },
//   {
//     id: "wordle",
//     title: "단어 맞추기",
//     description: "단어를 맞추는 워들 스타일 게임입니다.",
//     thumbnail: "/images/thumbnails/wordle.jpg",
//   },
//   {
//     id: "snake",
//     title: "스네이크 게임",
//     description: "뱀을 조종하여 먹이를 먹고 성장시키세요!",
//     thumbnail: "/images/thumbnails/snake.jpg",
//   },
//   {
//     id: "tetris",
//     title: "테트리스",
//     description: "클래식한 테트리스 게임을 즐겨보세요!",
//     thumbnail: "/images/thumbnails/tetris.jpg",
//   },
//   {
//     id: "tictactoe",
//     title: "틱택토",
//     description: "간단하지만 전략적인 틱택토 게임입니다.",
//     thumbnail: "/images/thumbnails/tictactoe.jpg",
//   },
//   {
//     id: "rockpaperscissors",
//     title: "가위바위보",
//     description: "컴퓨터와 가위바위보 대결을 펼쳐보세요!",
//     thumbnail: "/images/thumbnails/rockpaperscissors.jpg",
//   },
// ];

//   // 게임 찾기
// export default function GamePage({ params }) {
//   const { id } = params;
//   const game = sampleGames.find((game) => game.id === id);

//   // 게임이 없을 경우 404 페이지로 리다이렉트
//   if (!game) {
//     notFound();
//   }

//   return (
//     <div className={styles.container}>
//       <Link href="/" className={styles.backButton}>
//         &larr; 홈으로
//       </Link>

//       <h1 className={styles.title}>{game.title}</h1>
//       <p className={styles.description}>{game.description}</p>

//       <div className={styles.gameContainer}>
//         <div className={styles.gamePlaceholder}>
//           {id} 게임이 여기에 표시됩니다.
//         </div>
//       </div>
//     </div>
//   );
// }
