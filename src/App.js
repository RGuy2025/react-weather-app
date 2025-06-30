import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.shecodes.io/graduates/138591-rachel-guyett"
          target="_blank"
          rel="noreferrer"
        >
          Rachel Guyett
        </a>{" "}
        and{" "}
        <a href="https://github.com/RGuy2025" target="_blank" rel="noreferrer">
          is open sourced on Github
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
