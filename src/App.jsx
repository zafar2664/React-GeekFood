import "./App.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

function App(){
  return(
    <> 
     <Navbar />
     <Hero />
     <Section />
     <Reviews />
     <Footer/>
    </>
  )
}

export default App;