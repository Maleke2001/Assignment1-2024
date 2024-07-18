import "./App.css";
import { Home } from "./Components/home/Home";
import { Navbar } from "./Components/navbar/Navbar";
import { Article } from "./Components/article/Article";
import { About } from "./Components/about/About";
import { Subscription } from "./Components/subscription/Subscription";
import { Footer } from "./Components/footer/Footer";

function App() {
  return (
    <>
      <Home>
        <Navbar />
      </Home>
      <Article/>
      <About/>
      <Subscription/>
      <Footer/>
    </>
  );
}

export default App;
