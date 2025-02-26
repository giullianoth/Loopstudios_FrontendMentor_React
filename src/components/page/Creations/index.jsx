import { creations } from "../../../definitions/definnitions"
import Button from "../../common/Button"
import Container from "../../common/Container"
import styles from "./Creations.module.css"
import Grid from "../../common/Grid"
import Creation from "../../common/Creation"

const Creations = () => {
  return (
    <section className={styles.creations}>
      <Container spaced={true}>
        <div className={styles.creations__heading}>
          <header className={styles.creations__title}>
            <h1>Our creations</h1>
          </header>

          <Button className={styles.creations__cta} href="#">See all</Button>
        </div>

        <Grid columns={4} gap={20}>
          {creations.map((creation, index) => (
            <Creation
              key={`creation-${index + 1}`}
              mobileImage={creation.mobileImage}
              desktopImage={creation.desktopImage}
              title={creation.title}
              url={creation.url}
              html={creation.html} />
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Creations