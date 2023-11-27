import me from "../assets/me.jpg";
import linkedInIcon from "../assets/linkedIn.png";
import githubIcon from "../assets/github.png";

export default function Home() {
  return (
    <>
      <div id="home">
        <div className="homeContainer">
          <div className="img">
            <img src={me} id="me" />
          </div>
          <p>
            Passionate self-learner in Front-end Web Development, eager to
            contribute and learn.
          </p>
          <div className="socials">
            <a href="   https://github.com/Nima6666" target="_blank">
              <img src={githubIcon} alt="Github" />
            </a>
            <a
              href="   https://www.linkedin.com/in/prakash-lama-020614295/"
              target="_blank"
            >
              <img src={linkedInIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
