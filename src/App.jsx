import Card from "./components/card/Card"
import { raccourcisSvod, raccourcisLinux, raccourcisAstuces, raccourcisPresses, raccourcisDivers, achatsInfo } from "./data/data";
import "./App.css"
import Head from "./containers/nav/Header";

function App() {
  return (
    <div className="parallax">
      <Head />
      <main>
        <section>
          <h2>SVOD & TV </h2>
          <Card raccourcis={raccourcisSvod} />
        </section>
        <section>
          <h2>Linux</h2>
          <Card raccourcis={raccourcisLinux} />
        </section>
        <section>
          <h2>Aides & Astuces</h2>
          <Card raccourcis={raccourcisAstuces} />
        </section>
        <section>
          <h2>Presses</h2>
          <Card raccourcis={raccourcisPresses} />
        </section>
        <section>
          <h2>Achats Informatique</h2>
          <Card raccourcis={achatsInfo} />
        </section>
        <section>
          <h2>Divers</h2>
          <Card raccourcis={raccourcisDivers} />
        </section>
      </main>
      <footer>
        <span>
          copyright© JCR & P1t
        </span>
      </footer>
    </div>
  )
}
export default App
