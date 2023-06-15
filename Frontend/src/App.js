import "./App.css";
// import Counter from "./Components/Counter/Counter";
// import UseEffectHook from "./Components/UseEffectHook";
import Header from "./Components/Header/Header";
import RoutesModules from "./Routes/RoutesModules";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>{" "}
      <div>
        <RoutesModules />
      </div>{" "}
    </>
  );
}

export default App;
