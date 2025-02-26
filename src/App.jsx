import { useState } from "react"
import Creations from "./components/page/Creations"
import Footer from "./components/page/Footer"
import Header from "./components/page/Header"
import Headline from "./components/page/Headline"
import Presentation from "./components/page/Presentation"
import ScrollUp from "./components/common/ScrollUp"

function App() {
  const [scrolling, setScrolling] = useState(window.scrollY > 0)
  window.addEventListener("scroll", () => setScrolling(window.scrollY > 0))

  return (
    <>
      <Header scrolling={scrolling} />
      <main>
        <Headline />
        <Presentation />
        <Creations />
      </main>
      <Footer />
      <ScrollUp scrolling={scrolling} />
    </>
  )
}

export default App
