import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./ScrollUp.module.css"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const ScrollUp = ({ scrolling }) => {
    return (
        <div className={styles.scrollUp + (scrolling ? ` ${styles.scrollUpVisible}` : "")} onClick={() => window.scrollTo(0, 0)}>
            <FontAwesomeIcon icon={faChevronUp} color="white" size="lg" />
        </div>
    )
}

export default ScrollUp