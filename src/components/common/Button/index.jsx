import styles from "./Button.module.css"

const Button = ({ children, href, className }) => {
    return (
        <a className={styles.button + (className ? ` ${className}` : "")} href={href}>{children}</a>
    )
}

export default Button