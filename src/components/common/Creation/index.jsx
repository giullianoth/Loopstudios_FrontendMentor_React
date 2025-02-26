import styles from "./Creation.module.css"

const Creation = ({ mobileImage, desktopImage, title, url, html }) => {
    return (
        <article className={styles.creation}>
            <a href={url} className={styles.creation__image}>
                <picture>
                    <source media="(min-width: 900px)" srcSet={desktopImage} />
                    <img src={mobileImage} alt={title} />
                </picture>
            </a>

            <header className={styles.creation__title}>
                <h2>
                    <a href={url}>{html}</a>
                </h2>
            </header>
        </article>
    )
}

export default Creation