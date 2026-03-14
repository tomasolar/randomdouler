import styles from './RandomCorner.module.css'

const pillars = [
  {
    num: '01',
    title: 'Visual Art',
    text: 'A working studio first. Visitors enter where art is actively being made — not a curated showroom, but a living creative environment. Finished works alongside works in progress.',
  },
  {
    num: '02',
    title: 'Thursday Jam Nights',
    text: 'The social engine of the space. Informal, open, no tickets. Musicians from different backgrounds meet and improvise. Not a concert — a gathering.',
  },
  {
    num: '03',
    title: 'The Atmosphere',
    text: "The atmosphere is the product. Random Corner should feel authentic — a place where collectors encounter art in its original context, and creative people feel at home.",
  },
]

export default function RandomCorner() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>The Space · Marbella</p>
        <h1 className={styles.title}>Random Corner</h1>
        <p className={styles.subtitle}>
          Artist studio. Music. A place where interesting people find each other.
        </p>
      </header>

      <section className={styles.pillars}>
        {pillars.map(p => (
          <div key={p.num} className={styles.pillar}>
            <span className={styles.num}>{p.num}</span>
            <h3 className={styles.pillarTitle}>{p.title}</h3>
            <p className={styles.pillarText}>{p.text}</p>
          </div>
        ))}
      </section>

      <section className={styles.quote}>
        <blockquote>
          "What happens when art, music, and conversation are allowed to coexist naturally in the same environment?"
        </blockquote>
        <p className={styles.quoteCredit}>— The founding question</p>
      </section>

      <section className={styles.facts}>
        <div className={styles.fact}>
          <span className={styles.factValue}>€1,550</span>
          <span className={styles.factLabel}>Monthly rent</span>
        </div>
        <div className={styles.fact}>
          <span className={styles.factValue}>Thursday</span>
          <span className={styles.factLabel}>Jam Night</span>
        </div>
        <div className={styles.fact}>
          <span className={styles.factValue}>66 / 33</span>
          <span className={styles.factLabel}>Niko / Jonathan</span>
        </div>
        <div className={styles.fact}>
          <span className={styles.factValue}>Marbella</span>
          <span className={styles.factLabel}>Andalusia, Spain</span>
        </div>
      </section>

      <section className={styles.why}>
        <h2 className={styles.whyTitle}>Why Marbella</h2>
        <p className={styles.whyText}>
          Marbella sits at an unusual intersection: international wealth, an emerging creative scene, and a near-total absence of independent artist-led cultural spaces. The city has global visibility but lacks cultural depth. Random Corner exists to fill that gap.
        </p>
      </section>
    </div>
  )
}
