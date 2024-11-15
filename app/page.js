import styles from './page.module.css';
import Link from 'next/link';
import { postsMetadata } from './posts/posts'; // Centralized metadata import

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className={styles.scrollableList}>
        <ul className={styles.postList}> {/* Added postList class */}
          {postsMetadata.map((post) => (
            <li key={post.id} className={styles.postBox}>
              <Link href={`/posts/${post.id}`}>
                <div className={styles.postContent}>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.postDate}>{post.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}





