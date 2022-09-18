import About from './components/about/about'
import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";

function App() {
  return (
      <div className="App">
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
      </div>
  )
}

export default App;
