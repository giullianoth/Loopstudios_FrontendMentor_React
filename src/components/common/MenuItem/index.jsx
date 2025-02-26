import LinkWithEffect from "../LinkWithEffect"
import styles from "./MenuItem.module.css"

const MenuItem = ({ className, menu, url }) => {
  return (
    <li className={styles.menuItem + (className ? ` ${className}` : "")}>
      <LinkWithEffect href={url}>{menu}</LinkWithEffect>
    </li>
  )
}

export default MenuItem