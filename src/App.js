import logo from "./logo.svg";
import Weather from "./Weather.js";
import { Audio } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World, it works!</p>
      </header>
      <Audio
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
      <Weather />
    </div>
  );
}

export default App;
