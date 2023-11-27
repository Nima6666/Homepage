import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    function checkActive() {
      if (
        document.documentElement.scrollHeight - window.scrollY <
        window.innerHeight + 400
      ) {
        document.querySelectorAll(".navs > li").forEach((li) => {
          li.classList.remove("active");
        });
        document.getElementById("contactHead").classList.add("active");
      } else if (window.innerHeight - window.scrollY < 300) {
        document.querySelectorAll(".navs > li").forEach((li) => {
          li.classList.remove("active");
        });
        document.getElementById("workHead").classList.add("active");
      } else {
        document.querySelectorAll(".navs > li").forEach((li) => {
          li.classList.remove("active");
        });
        document.getElementById("homeHead").classList.add("active");
      }
    }

    checkActive();

    function setActive() {
      document.querySelectorAll(".navs > li").forEach((li) => {
        li.classList.remove("active");
      });
      this.classList.add("active");
    }

    document.querySelectorAll(".navs > li").forEach((li) => {
      li.addEventListener("click", setActive);
    });

    window.addEventListener("scroll", checkActive);
  }, []);

  function handleHeadClick(e) {
    if (e.target.id == "homeHead") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (e.target.id == "workHead") {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    } else if (e.target.id == "contactHead") {
      window.scrollTo({
        top: document.documentElement.scrollHeight - window.innerHeight,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <header>
        <h1>Prakash Lama</h1>
        <nav className="navs">
          <li id="homeHead" onClick={(e) => handleHeadClick(e)}>
            <p>Home</p>
          </li>
          <li id="workHead" onClick={(e) => handleHeadClick(e)}>
            <p>My Work</p>
          </li>
          <li id="contactHead" onClick={(e) => handleHeadClick(e)}>
            <p>Contact</p>
          </li>
          <div className="indicatorContainer">
            <div className="indicator"></div>
          </div>
        </nav>
      </header>
    </>
  );
}
