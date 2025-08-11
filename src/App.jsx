import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Mywork from "./Components/Mywork/Mywork";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
    </div>
  );
};

export default App;
