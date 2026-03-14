import styles from './Hero.module.css'

export default function Hero({ setPage }) {
  return (
    <div className={styles.page}>

      {/* ── FULL BLEED OPENER ── */}
      <section className={styles.opener}>
        <div className={styles.openerBg} />
        <div className={styles.openerOverlay} />

        <div className={styles.openerTop}>
          <span className={styles.openerLabel}>Marbella · España</span>
          <span className={styles.openerLabel}>randomdouler.art</span>
        </div>

        <div className={styles.openerCenter}>
          <h1 className={styles.mainTitle}>
            <span className={styles.mainTitleLine1}>Random</span>
            <span className={styles.mainTitleLine2}><em>Douler</em></span>
          </h1>
        </div>

        <div className={styles.openerBottom}>
          <p className={styles.openerSub}>Art. Music. The space between.</p>
          <button className={styles.openerCta} onClick={() => setPage('thursday')}>
            This Thursday →
          </button>
        </div>

        {/* vertical side text */}
        <span className={styles.sideTextLeft}>Artist Studio</span>
        <span className={styles.sideTextRight}>Est. 2025</span>
      </section>

      {/* ── MARQUEE ── */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          <span>Random Corner · Polígono Industrial · Marbella · Every Thursday from 20:00 · Free Entry · Art on Every Wall · Live Music · </span>
          <span>Random Corner · Polígono Industrial · Marbella · Every Thursday from 20:00 · Free Entry · Art on Every Wall · Live Music · </span>
        </div>
      </div>

      {/* ── TWO ROOMS ── */}
      <section className={styles.rooms}>
        <div className={styles.roomCard} onClick={() => setPage('corner')}>
          <div className={styles.roomImg} style={{ backgroundImage: 'url(/studio.jpg)' }} />
          <div className={styles.roomOverlay} />
          <div className={styles.roomContent}>
            <span className={styles.roomEyebrow}>The Space</span>
            <h2 className={styles.roomTitle}>Random<br /><em>Corner</em></h2>
            <p className={styles.roomText}>Artist studio. Tree branches on the walls. Art you can own.</p>
            <span className={styles.roomLink}>Enter →</span>
          </div>
        </div>

        <div className={styles.roomCard} onClick={() => setPage('thursday')}>
          <div className={styles.roomImg} style={{ backgroundImage: 'url(/jam.jpg)' }} />
          <div className={styles.roomOverlay} />
          <div className={styles.roomContent}>
            <span className={styles.roomEyebrow}>Every Thursday</span>
            <h2 className={styles.roomTitle}>Jam<br /><em>Night</em></h2>
            <p className={styles.roomText}>Open music. Real bar. People who stay until late.</p>
            <span className={styles.roomLink}>This Thursday →</span>
          </div>
        </div>
      </section>

      {/* ── FACTLINE ── */}
      <section className={styles.facts}>
        <div className={styles.fact}>
          <span className={styles.factNum}>01</span>
          <span className={styles.factText}>Finnish artist in an industrial block in the south of Spain</span>
        </div>
        <div className={styles.factDivider} />
        <div className={styles.fact}>
          <span className={styles.factNum}>02</span>
          <span className={styles.factText}>A real bar. Tree branches in the ceiling. Paintings on the walls.</span>
        </div>
        <div className={styles.factDivider} />
        <div className={styles.fact}>
          <span className={styles.factNum}>03</span>
          <span className={styles.factText}>Every Thursday since the beginning. No exceptions.</span>
        </div>
      </section>

      {/* ── BAR SHOT ── */}
      <section className={styles.barShot}>
        <div className={styles.barShotImg} />
        <div className={styles.barShotText}>
          <p className={styles.barPull}>"The bar is a room."</p>
          <p className={styles.barSub}>Floor to ceiling. Amber light. You'll know when you're in it.</p>
        </div>
      </section>

    </div>
  )
}
