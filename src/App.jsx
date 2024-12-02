import Products from "./components/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Products />
      <ToastContainer />
    </div>
  );
}

export default App;
