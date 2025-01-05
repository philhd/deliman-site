import Link from 'next/link'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Deli Manager Showdown</h1>
        <h2>I made a ridiculous game to test out the coding capabilities of o1 preview. It kinda sucks, but still pretty neat that it took 5 minutes of work and virtually no coding.</h2>

        <Link href="/index.html">Play the game</Link>
      </main>
    </div>
  );
}
