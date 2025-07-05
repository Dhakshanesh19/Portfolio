import '../App.css'
function Hero({ fadeOut }) {
  return (
    <div className={`hero-splash ${fadeOut ? "fade-out" : "fade-in"}`}>
      <h1>System.out.println("Portfolio");</h1>
      <h2>I'm Dhakshanesh — Full Stack Developer,JAVA</h2>
    </div>
  );
}

export default Hero;
