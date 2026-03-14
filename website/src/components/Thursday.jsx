import styles from './Thursday.module.css'

export default function Thursday() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <p className={styles.recurring}>Every Thursday</p>
          <h1 className={styles.title}>Jam<br /><em>Night</em></h1>
          <p className={styles.location}>Random Corner · Polígono · Marbella</p>
        </div>
        <div className={styles.heroBottom}>
          <p className={styles.tagline}>
            No tickets. No set lists. Just show up.
          </p>
          <div className={styles.time}>
            <span className={styles.timeNum}>20:00</span>
            <span className={styles.timeDivider}>—</span>
            <span className={styles.timeNum}>late</span>
          </div>
        </div>
      </section>

      <section className={styles.what}>
        <p className={styles.whatText}>
          A room in an industrial block. Warm light. Someone already playing.
          Musicians meet musicians. Artists meet collectors. Strangers become regulars.
          Nothing is planned. Everything happens.
        </p>
      </section>

      <section className={styles.vibe}>
        <div className={styles.vibeItem}>
          <span className={styles.vibeLabel}>The Space</span>
          <span className={styles.vibeValue}>Artist studio in a polígono. Raw walls, real work on them.</span>
        </div>
        <div className={styles.vibeItem}>
          <span className={styles.vibeLabel}>The Music</span>
          <span className={styles.vibeValue}>Open jam. Improvised. Every Thursday a different thing.</span>
        </div>
        <div className={styles.vibeItem}>
          <span className={styles.vibeLabel}>The Drinks</span>
          <span className={styles.vibeValue}>Beer, wine, something simple. Stay as long as you want.</span>
        </div>
        <div className={styles.vibeItem}>
          <span className={styles.vibeLabel}>Who Comes</span>
          <span className={styles.vibeValue}>Musicians. Artists. People who heard about it from someone.</span>
        </div>
      </section>

      <section className={styles.find}>
        <h2 className={styles.findTitle}>Finding Us</h2>
        <p className={styles.findText}>
          We're in the industrial zone. Not the most obvious destination.
          That's the point — the people who make the effort are always the right people.
          Look for the light on.
        </p>
        <div className={styles.findDetails}>
          <div className={styles.findItem}>
            <span className={styles.findLabel}>Area</span>
            <span className={styles.findValue}>Polígono Industrial, Marbella</span>
          </div>
          <div className={styles.findItem}>
            <span className={styles.findLabel}>When</span>
            <span className={styles.findValue}>Every Thursday from 20:00</span>
          </div>
          <div className={styles.findItem}>
            <span className={styles.findLabel}>Entry</span>
            <span className={styles.findValue}>Free. Bring someone interesting.</span>
          </div>
        </div>
      </section>

      <section className={styles.closer}>
        <blockquote className={styles.quote}>
          "The kind of night you describe to someone the next day and they wish they'd been there."
        </blockquote>
      </section>

    </div>
  )
}
