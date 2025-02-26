import styles from "./LinkWithEffect.module.css"

const LinkWithEffect = ({ children, href, blank }) => {
  return (
    <a
      className={styles.linkEffect}
      href={href}
      target={blank && "_blank"}
      rel={blank && "noopener noreferrer"}>{children}</a>
  )
}

export default LinkWithEffect