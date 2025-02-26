import { mainMenu } from "../../../definitions/definnitions"
import MenuItem from "../MenuItem"
import styles from "./Menu.module.css"

const Menu = ({ menuClassName, menuItemClassName }) => {
  return (
    <ul className={styles.menu + (menuClassName ? ` ${menuClassName}` : "")}>
      {mainMenu.map((item, index) => (
        <MenuItem
          key={`menu-item-${index + 1}`}
          className={menuItemClassName}
          menu={item.menu}
          url={item.url} />
      ))}
    </ul>
  )
}

export default Menu