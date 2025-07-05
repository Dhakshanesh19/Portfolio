import '../App.css'
function Hero({ fadeOut }) {
  return (
    <div className={`hero-splash ${fadeOut ? "fade-out" : "fade-in"}`}>
      <h1>Welcome to My Portfolio</h1>
      <h2>I'm Dhakshanesh — Full Stack Developer</h2>
    </div>
  );
}

export default Hero;
