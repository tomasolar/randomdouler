import styles from './Hero.module.css'

export default function Hero({ setPage }) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Marbella, Spain</p>
        <h1 className={styles.title}>
          <em>Random</em><br />Douler
        </h1>
        <p className={styles.sub}>
          Art. Music. The space between.
        </p>
        <button
          className={styles.cta}
          onClick={() => setPage('corner')}
        >
          Enter Random Corner →
        </button>
      </div>

      <div className={styles.aside}>
        <div className={styles.card} onClick={() => setPage('corner')}>
          <span className={styles.cardLabel}>The Space</span>
          <h2 className={styles.cardTitle}>Random Corner</h2>
          <p className={styles.cardText}>
            Artist studio. Thursday jam nights. A place where interesting people find each other.
          </p>
          <span className={styles.cardLink}>Explore →</span>
        </div>

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Studio</span>
            <span className={styles.infoValue}>Marbella</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Thursdays</span>
            <span className={styles.infoValue}>Jam Nights</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Artist</span>
            <span className={styles.infoValue}>Niko Kyöstiö</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>randomdouler.art</span>
      </div>
    </section>
  )
}
