import Container from "../../common/Container"
import styles from "./Headline.module.css"

const Headline = () => {
  return (
    <section className={styles.headline}>
      <Container className={styles.headline__container}>
        <div className={styles.headline__wrapper}>
          <header className={styles.headline__title}>
            <h1>
              <span>Immersive</span>
              <span>experiences</span>
              <span>that deliver</span>
            </h1>
          </header>
        </div>
      </Container>
    </section>
  )
}

export default Headline