import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <img
        className="h-[240px] w-[240px] rounded-full "
        src="https://avatars.githubusercontent.com/u/173791507?v=4"
        alt=""
      />
      <h1>
        <span>I'm Afrid Shaik,</span> frontend devloper based in INDIA.
      </h1>
      <p>
        I am a frontend developer from Hyderabad, India with 2+ years of
        experience in Comcast.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
