import styles from './Thursday.module.css'

const works = [
  { id: 1, title: 'Untitled I',    size: '80 × 100 cm', status: 'available' },
  { id: 2, title: 'Polígono',      size: '120 × 90 cm', status: 'available' },
  { id: 3, title: 'Warm Study',    size: '60 × 60 cm',  status: 'sold'      },
  { id: 4, title: 'Night Session', size: '100 × 80 cm', status: 'available' },
]

export default function Thursday() {
  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <p className={styles.recurring}>Every Thursday · From 20:00</p>
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

      {/* ── WHAT HAPPENS ── */}
      <section className={styles.what}>
        <p className={styles.whatText}>
          An industrial block in the polígono. Inside: tree branches climbing the walls,
          a full bar glowing amber, Niko's paintings watching from every corner.
          Someone already playing when you arrive. Nothing scheduled.
          Everything happens anyway.
        </p>
      </section>

      {/* ── ART ON THE WALLS ── */}
      <section className={styles.artSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>On the Walls</span>
          <h2 className={styles.sectionTitle}>Works Available</h2>
          <p className={styles.sectionSub}>
            Every Thursday the studio is live. Come for the music,
            leave with something on your wall.
          </p>
        </div>

        <div className={styles.worksGrid}>
          {works.map(w => (
            <div key={w.id} className={`${styles.workCard} ${w.status === 'sold' ? styles.workSold : ''}`}>
              <div className={styles.workImage}>
                {/* swap this div for an <img> when you have photos */}
                <div className={styles.workPlaceholder} />
                <span className={styles.workStatus}>
                  {w.status === 'available' ? 'Available' : 'Sold'}
                </span>
              </div>
              <div className={styles.workInfo}>
                <span className={styles.workTitle}>{w.title}</span>
                <span className={styles.workSize}>{w.size}</span>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.artNote}>
          Interested in a work? Come to a Thursday and meet Niko directly.
          That's how it works here.
        </p>
      </section>

      {/* ── FOR BANDS ── */}
      <section className={styles.bandsSection}>
        <div className={styles.bandsInner}>
          <div className={styles.bandsLeft}>
            <span className={styles.sectionEyebrow}>For Musicians</span>
            <h2 className={styles.bandsTitle}>
              Want to<br /><em>play here?</em>
            </h2>
            <p className={styles.bandsText}>
              We're building something slow and real. Every Thursday a different
              energy — whoever shows up, plays. If you're a band, a duo, a solo
              act, or just someone who brings an instrument — come through.
            </p>
            <p className={styles.bandsText}>
              No stage. No booking fee. No formal setup. The space is yours
              for the night alongside whoever else arrives. The crowd is small
              now and that's the point — these are the people who will still
              be talking about it in two years.
            </p>
            <a className={styles.bandsContact} href="mailto:hello@randomdouler.art">
              Get in touch →
            </a>
          </div>

          <div className={styles.bandsRight}>
            <div className={styles.bandsFact}>
              <span className={styles.bandsFactNum}>Every</span>
              <span className={styles.bandsFactLabel}>Thursday without exception</span>
            </div>
            <div className={styles.bandsFact}>
              <span className={styles.bandsFactNum}>Free</span>
              <span className={styles.bandsFactLabel}>No booking fee, no tickets</span>
            </div>
            <div className={styles.bandsFact}>
              <span className={styles.bandsFactNum}>Open</span>
              <span className={styles.bandsFactLabel}>Jam format, bring who you want</span>
            </div>
            <div className={styles.bandsFact}>
              <span className={styles.bandsFactNum}>Real</span>
              <span className={styles.bandsFactLabel}>Art on the walls, people who listen</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIBE STRIP ── */}
      <section className={styles.vibe}>
        <div className={styles.vibeItem}>
          <span className={styles.vibeLabel}>The Space</span>
          <span className={styles.vibeValue}>Industrial block. Tree branches on every wall. Paintings between them.</span>
        </div>
        <div className={styles.vibeItem}>
          <span className={styles.vibeLabel}>The Music</span>
          <span className={styles.vibeValue}>Open jam. Improvised. Different every week.</span>
        </div>
        <div className={styles.vibeItem}>
          <span className={styles.vibeLabel}>The Bar</span>
          <span className={styles.vibeValue}>A whole room. Tree branches, amber light, bottles floor to ceiling. Stay as long as you want.</span>
        </div>
        <div className={styles.vibeItem}>
          <span className={styles.vibeLabel}>Who Comes</span>
          <span className={styles.vibeValue}>Musicians. Collectors. People who heard from someone.</span>
        </div>
      </section>

      {/* ── FIND US ── */}
      <section className={styles.find}>
        <h2 className={styles.findTitle}>Finding Us</h2>
        <p className={styles.findText}>
          We're in the industrial zone. Not the most obvious destination.
          That's the point — the people who make the effort are always
          the right people. Look for the light on.
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

      {/* ── CLOSER ── */}
      <section className={styles.closer}>
        <blockquote className={styles.quote}>
          "You're holding a glass of wine. Through it, the whole room glows.
          Someone is playing something you've never heard before.
          You're not going anywhere."
        </blockquote>
      </section>

    </div>
  )
}
