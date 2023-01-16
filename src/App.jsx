import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import OurMenu from "./components/OurMenu";
import Footer from "./components/Footer";

function App() {
  

  return (
    <div className="font-poppins">
      <NavBar />
      <Hero />
      <main>
      <HeadlineCards />
      <OurMenu />
      </main>
      <Footer />
    </div>
  )
}

export default App;
