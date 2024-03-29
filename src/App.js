import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RouteList from "./routes/RouteList";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import "./sass/App.scss";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex flex-col justify-between min-h-screen">
        <NavBar />
        <RouteList />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
