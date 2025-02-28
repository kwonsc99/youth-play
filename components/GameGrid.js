// components/GameGrid.js
import Card from "./Card";
import styles from "./GameGrid.module.css";

export default function GameGrid({ games }) {
  return (
    <div className={styles.grid}>
      {games.map((game) => (
        <div className={styles.cardWrapper} key={game.id}>
          <Card game={game} />
        </div>
      ))}
    </div>
  );
}
