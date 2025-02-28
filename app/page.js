// app/page.js
import GameGrid from "../components/GameGrid";

// 샘플 게임 데이터
const sampleGames = [
  {
    id: "quiz",
    title: "퀴즈 게임",
    description: "다양한 주제의 재미있는 퀴즈를 풀어보세요!",
    thumbnail: "/images/thumbnails/quiz.jpg",
  },
  {
    id: "memory",
    title: "메모리 게임",
    description: "카드를 짝지어 기억력을 테스트해보세요!",
    thumbnail: "/images/thumbnails/memory.jpg",
  },
  {
    id: "puzzle",
    title: "퍼즐 게임",
    description: "두뇌를 자극하는 퍼즐을 풀어보세요!",
    thumbnail: "/images/thumbnails/puzzle.jpg",
  },
  {
    id: "wordle",
    title: "단어 맞추기",
    description: "단어를 맞추는 워들 스타일 게임입니다.",
    thumbnail: "/images/thumbnails/wordle.jpg",
  },
  {
    id: "snake",
    title: "스네이크 게임",
    description: "뱀을 조종하여 먹이를 먹고 성장시키세요!",
    thumbnail: "/images/thumbnails/snake.jpg",
  },
  {
    id: "tetris",
    title: "테트리스",
    description: "클래식한 테트리스 게임을 즐겨보세요!",
    thumbnail: "/images/thumbnails/tetris.jpg",
  },
  {
    id: "tictactoe",
    title: "틱택토",
    description: "간단하지만 전략적인 틱택토 게임입니다.",
    thumbnail: "/images/thumbnails/tictactoe.jpg",
  },
  {
    id: "rockpaperscissors",
    title: "가위바위보",
    description: "컴퓨터와 가위바위보 대결을 펼쳐보세요!",
    thumbnail: "/images/thumbnails/rockpaperscissors.jpg",
  },
];

export default function Home() {
  return (
    <>
      <div className="banner">
        <div className="bannerContent">
          <h1 className="bannerTitle">Youth Play</h1>
          <p className="bannerSubtitle">
            다양한 게임으로 즐거운 시간을 보내세요!
          </p>
          <button className="primaryButton">시작하기</button>
        </div>
      </div>

      <div className="container">
        <h2 className="sectionTitle">추천 게임</h2>
        <p className="description">즐겁게 플레이하며 시간을 보내세요!</p>

        <GameGrid games={sampleGames} />
      </div>
    </>
  );
}
