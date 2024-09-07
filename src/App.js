import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Biblioteca from "./pages/Biblioteca";
import Contactos from "./pages/Contactos";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Inicio from "./pages/Inicio";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="text-light bg-black vh-200">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/biblioteca" element={<Biblioteca/>}/>
        <Route path="/contactos" element={<Contactos/>}/>
        <Route path="/" element={<Error404/>}/>
        
    
      </Routes>
      <hr></hr>
      <Footer/>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
