import { useState } from "react"
import styles from "./Grid.module.css"

const Grid = ({ children, columns, gap }) => {
    const [smallScreen, setSmalScreen] = useState(window.innerWidth >= 900)
    window.addEventListener("resize", () => setSmalScreen(window.innerWidth >= 900))

    const gridStyle = {
        gridTemplateColumns: smallScreen ? `repeat(${columns}, 1fr)` : "",
        gap: `${gap}px`
    }

    return (
        <div style={gridStyle} className={styles.grid}>{children}</div>
    )
}

export default Grid