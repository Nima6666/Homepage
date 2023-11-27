import { useEffect } from "react";
import Contact from "./components/contact";
import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 125) {
        document
          .querySelector("header")
          .setAttribute("style", "background-color: rgba(45, 56, 34, 0.9");
        document
          .querySelector("header > h1")
          .setAttribute("style", "font-size: 1.2rem;");
        document.querySelectorAll("nav > li").forEach((item) => {
          item.setAttribute("style", "font-size: 1rem; font-weight: bold");
        });
      } else {
        document
          .querySelector("header")
          .setAttribute("style", "background-color: #435334");
        document
          .querySelector("header > h1")
          .setAttribute("style", "font-size: 2rem;");
        document.querySelectorAll("nav > li").forEach((item) => {
          item.setAttribute("style", "font-size: 1.3rem");
        });
      }
    });

    let [wave1, wave2, wave3, wave4] = [400, 300, 200, 700];
    function animation() {
      wave1 = wave1 + 0.8;
      wave2 = wave2 - 0.9;
      wave3 = wave3 + 0.5;
      wave4 = wave4 - 0.7;
      document.getElementById("wave1").style.backgroundPositionX = `${wave1}px`;
      document.getElementById("wave2").style.backgroundPositionX = `${wave2}px`;
      document.getElementById("wave3").style.backgroundPositionX = `${wave3}px`;
      document.getElementById("wave4").style.backgroundPositionX = `${wave4}px`;
    }

    setInterval(() => {
      animation();
    }, 17);
  }, []);

  return (
    <div className="container">
      <Header />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
