import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header2 from "./pages/Header2";
import Inicio from "./pages/inicio";
import Footer from "./pages/Footer";
import Biblioteca from "./pages/Biblioteca";
import Directorio from "./pages/Directorio";
import Error404 from "./pages/Error404";





function App() {
  return (
    <div className="text-light bg-black vh-150">

    <BrowserRouter>
      
      <Header2/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/biblioteca" element={<Biblioteca/>}/>
        <Route path="/directorio" element={<Directorio/>}/>
        <Route path="error404" element={<Error404/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
