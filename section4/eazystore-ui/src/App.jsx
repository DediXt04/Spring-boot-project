import "./App.css";

//Componets
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Home/>
      <Footer />
    </>
  );
}

export default App;
