import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>The People</p>
        <h1 className={styles.title}>About</h1>
      </header>

      <div className={styles.people}>
        <div className={styles.person}>
          <div className={styles.personHeader}>
            <h2 className={styles.name}>Niko Kyöstiö</h2>
            <span className={styles.role}>Artistic Director · 66.6%</span>
          </div>
          <p className={styles.bio}>
            Finnish visual artist based in Marbella. Random Corner is built around his studio practice and production. He creates the work, defines the artistic direction of the space, and builds relationships with collectors.
          </p>
          <div className={styles.responsibilities}>
            <span>Artwork creation</span>
            <span>Exhibition development</span>
            <span>Collector relationships</span>
            <span>Visual identity</span>
          </div>
        </div>

        <div className={styles.person}>
          <div className={styles.personHeader}>
            <h2 className={styles.name}>Jonathan Raven</h2>
            <span className={styles.role}>Music & Culture · 33.3%</span>
          </div>
          <p className={styles.bio}>
            Musician and cultural networker. Shapes the musical atmosphere and social character of the space. His experience in music and hospitality environments gives Random Corner its distinctive evening energy.
          </p>
          <div className={styles.responsibilities}>
            <span>Jam night culture</span>
            <span>Musical programming</span>
            <span>Local music networks</span>
            <span>Social atmosphere</span>
          </div>
        </div>
      </div>

      <section className={styles.manifesto}>
        <h2 className={styles.manifestoTitle}>Why This Exists</h2>
        <p>
          Random Corner began with a simple idea: that creative work needs real places where people can meet, exchange ideas, and create something together.
        </p>
        <p>
          In many cities, cultural life has gradually moved into highly commercialized environments. Galleries become formal institutions, music venues become businesses, and spontaneous artistic encounters become increasingly rare.
        </p>
        <p>
          Random Corner aims to restore something more human.
        </p>
      </section>
    </div>
  )
}
