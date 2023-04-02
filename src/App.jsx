import "./App.css";
import FoodPageLayout from "./components/FoodPageLayout/FoodPageLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Header></Header>
      <FoodPageLayout></FoodPageLayout>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
