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
            Finnish painter, now in Marbella. Grew up in the north — tundra, silence, long winters. Ended up in the Mediterranean with a rented industrial unit and a plan. Builds tree branches into his walls. Makes large dark paintings. Finds the joke in everything.
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
          Niko needed a studio. The cheapest studio in Marbella was in an industrial block in the polígono.
          He took it. Then he made it beautiful in his own way — tree branches, warm light, bottles, paintings everywhere.
        </p>
        <p>
          Then Jonathan arrived. A musician looking for the same thing: a place that wasn't a venue,
          wasn't a gallery, wasn't trying to be anything official. Just a room where things happen.
        </p>
        <p>
          Thursdays started because Thursday was a good night to play music.
          It stayed because the right people kept showing up.
        </p>
      </section>
    </div>
  )
}
