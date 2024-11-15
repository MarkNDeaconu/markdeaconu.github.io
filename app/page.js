// app/page.js
import styles from './page.module.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className={styles.posts}>
        <ul>
          <li className={styles.postBox}>
            <Link href="/posts/post1">
              <div className={styles.postContent}>
                <h2 className={styles.postTitle}>How I Built This Blog with Next.js</h2>
                <p className={styles.postDate}>Posted on November 14, 2024</p>
              </div>
            </Link>
          </li>
          <li className={styles.postBox}>
            <Link href="/posts/post2">
              <div className={styles.postContent}>
                <h2 className={styles.postTitle}>Getting Started with JavaScript</h2>
                <p className={styles.postDate}>Posted on November 1, 2024</p>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}


