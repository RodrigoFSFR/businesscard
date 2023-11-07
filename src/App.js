import "./App.css";
import FadeIn from "./FadeIn";
import LogoAnimation from "./LogoAnimation";
import bg from "./waterdrops.png";

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundImage: `url(${bg})`
        }}
      >
        <LogoAnimation />
        <FadeIn />
      </header>
    </div>
  );
}

export default App;
