import "./App.css";
import Foods from "./components/Foods/Foods";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Header></Header>
      <Foods></Foods>
    </div>
  );
}

export default App;
