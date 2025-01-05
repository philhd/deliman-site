import Link from 'next/link'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Deli Manager Showdown</h1>
        <h2>I made a ridiculous game to test out the coding capabilities of o1 preview. It kinda sucks, but still pretty neat that it took 5 minutes of work and virtually no coding.</h2>

        <p>The game is set in a supermarket. You are the deli manager, and are being harassed by a throng of impatient shoppers. You must jump around and hurl deli meats at them.</p>

        <b>Avoid contact with customers and their shopping carts at all costs!</b>

        <Link className={styles.link} href="/index.html">Play the game</Link>

        <Link className={styles.link} href="https://github.com/philhd/deliman">See the source and the prompts that generated everything</Link>
      </main>
    </div>
  );
}
