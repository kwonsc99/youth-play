// app/page.js
import GameGrid from "../components/GameGrid";

// 샘플 게임 데이터
const sampleGames = [
  {
    id: "missiongame",
    title: "미션게임",
    description: "뽑기에서 나온 미션을 수행하지 못하면 한잔 그냥 마시면 돼~",
    thumbnail: "/images/thumbnails/quiz.jpg",
  },
  {
    id: "test",
    title: "test",
    description: "this is test page",
    thumbnail: "/images/thumbnails/memory.jpg",
  },
];

export default function Home() {
  return (
    <>
      <div className="banner">
        <div className="bannerContent">
          {/* <h1 className="bannerTitle">유스플레이</h1> */}
          <p className="bannerSubtitle">
            &quot;걸렸잖아 한잔해~&quot;<br></br>전투적인 술자리를 만들어보세요!
          </p>
        </div>
      </div>

      <div className="container">
        <h2 className="sectionTitle">2025 핫한 술게임</h2>
        <p className="description">최근 가장 인기있는 술게임으로 준비했어요!</p>

        <GameGrid games={sampleGames} />
      </div>
    </>
  );
}
