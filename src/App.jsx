import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import OurMenu from "./components/OurMenu";
import Footer from "./components/Footer";
import Staff from "./components/Staff";
import ReserveForm from "./components/ReserveForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function App() {
  

  return (
    <div className="font-poppins">
      <ToastContainer limit={1} />
      <NavBar />
      <Hero />
      <main>
      <HeadlineCards />
      <OurMenu />
      <Staff />
      <ReserveForm />
      </main>
      <Footer />
    </div>
  )
}

export default App;
