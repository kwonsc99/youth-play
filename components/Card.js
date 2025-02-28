// components/Card.js
import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

export default function Card({ game }) {
  return (
    <Link href={`/games/${game.id}`} className={styles.card}>
      <div className={styles.thumbnailContainer}>
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.thumbnail}
        />
      </div>
      <h3 className={styles.title}>{game.title}</h3>
      <p className={styles.description}>{game.description}</p>
    </Link>
  );
}
