import Container from "../../common/Container"
import styles from "./Header.module.css"
import logo from "../../../assets/images/logo.svg"
import hamburgerIcon from "../../../assets/images/icon-hamburger.svg"
import closeIcon from "../../../assets/images/icon-close.svg"
import Menu from "../../common/Menu"
import { useState } from "react"

const Header = ({ scrolling }) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className={styles.header + (scrolling ? ` ${styles.headerScrolling}` : "")}>
      <Container>
        <div className={styles.header__wrapper}>
          <div className={styles.header__pageTitle}>
            <h1>Loopstudios</h1>

            <div className={styles.header__logo}>
              <a href="#">
                <img src={logo} alt="Loopstudios" />
              </a>
            </div>
          </div>

          <nav className={styles.header__navigation}>
            <div className={styles.header__navigationIcon} onClick={() => setOpenMenu(!openMenu)}>
              <img src={openMenu ? closeIcon : hamburgerIcon} alt="Open Menu" />
            </div>

            <Menu
              menuClassName={styles.header__menu + (openMenu ? ` ${styles.header__menuOpen}` : "")}
              menuItemClassName={styles.header__menuItem} />
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header