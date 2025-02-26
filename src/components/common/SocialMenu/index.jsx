import styles from "./SocialMenu.module.css"
import SocialMenuItem from "../SocialMenuItem"
import { socialMenu } from "../../../definitions/definnitions"

const SocialMenu = () => {
    return (
        <ul className={styles.socialMenu}>
            {socialMenu.map((item, index) => (
                <SocialMenuItem
                    key={`social-menu-item-${index + 1}`}
                    icon={item.icon}
                    platform={item.platform}
                    url={item.url} />
            ))}
        </ul>
    )
}

export default SocialMenu