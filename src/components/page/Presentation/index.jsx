import Container from "../../common/Container"
import styles from "./Presentation.module.css"
import mobilePresentationImage from "../../../assets/images/mobile/image-interactive.jpg"
import desktopPresentationImage from "../../../assets/images/desktop/image-interactive.jpg"

const Presentation = () => {
  return (
    <section className={styles.presentation}>
      <Container spaced={true}>
        <div className={styles.presentation__wrapper}>
          <div className={styles.presentation__image}>
            <picture>
              <source media="(min-width: 1024px)" srcSet={desktopPresentationImage} />
              <img src={mobilePresentationImage} alt="Interactive VR" />
            </picture>
          </div>

          <div className={styles.presentation__info}>
            <header className={styles.presentation__title}>
              <h1>The leader in interactive VR</h1>
            </header>

            <p className={styles.presentation__text}>Founded in 2011, Loopstudios has been producing world-class virtual reality
              projects for some of the best companies around the globe. Our award-winning
              creations have transformed businesses through digital experiences that bind</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Presentation