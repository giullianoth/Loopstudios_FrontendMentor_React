import Creations from "./components/page/Creations"
import Footer from "./components/page/Footer"
import Header from "./components/page/Header"
import Headline from "./components/page/Headline"
import Presentation from "./components/page/Presentation"

function App() {
  return (
    <>
      <Header />
      <main>
        <Headline />
        <Presentation />
        <Creations />
      </main>
      <Footer />
    </>
  )
}

export default App
