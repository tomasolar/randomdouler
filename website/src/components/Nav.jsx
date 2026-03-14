import styles from './Nav.module.css'

export default function Nav({ page, setPage }) {
  return (
    <nav className={styles.nav}>
      <button
        className={styles.logo}
        onClick={() => setPage('home')}
      >
        RD
      </button>
      <div className={styles.links}>
        <button
          className={`${styles.link} ${page === 'corner' ? styles.active : ''}`}
          onClick={() => setPage('corner')}
        >
          Random Corner
        </button>
        <button
          className={`${styles.link} ${page === 'about' ? styles.active : ''}`}
          onClick={() => setPage('about')}
        >
          About
        </button>
      </div>
    </nav>
  )
}
