import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            className="profile-img rounded-2xl"
            src="https://avatars.githubusercontent.com/u/173791507?v=4"
            alt=""
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a passionate Frontend Developer with 2.6 years of hands-on
              experience building clean, responsive, and user-focused web
              interfaces. Over the years, I’ve had the opportunity to
              collaborate with talented teams and contribute to projects that
              blend performance with great design.
            </p>
            <p>
              I approach every project with curiosity, ownership, and a strong
              focus on usability. From crafting reusable components to
              optimizing for speed and responsiveness, I take pride in writing
              code that looks good — and works even better.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind Css</p> <hr style={{ width: "55%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1 className="font-black ">2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
