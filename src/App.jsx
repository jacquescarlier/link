import Card from "./components/card/Card"
import { raccourcisSvod, raccourcisLinux, raccourcisAstuces, raccourcisPresses, raccourcisDivers } from "./data/data";
import "./App.css"
import Navi from "./containers/nav/Navi";

function App() {


  return (
    <>
      <Navi />
      <section className="svodSection">
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
        <h2>Divers</h2>
        <Card raccourcis={raccourcisDivers} />
      </section>

    </>
  )
}

export default App
