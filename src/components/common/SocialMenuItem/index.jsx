import LinkWithEffect from "../LinkWithEffect"
import styles from "./SocialMenuItem.module.css"

const SocialMenuItem = ({ icon, platform, url }) => {
    return (
        <li className={styles.socialItem}>
            <LinkWithEffect blank={true} href={url}>
                <img src={icon} alt={platform} />
            </LinkWithEffect>
        </li>
    )
}

export default SocialMenuItem