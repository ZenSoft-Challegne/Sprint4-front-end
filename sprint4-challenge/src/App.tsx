import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import FAQ from './pages/FAQ';
import Contato from './pages/Contato';
import Integrantes from './pages/Integrantes';
import Jornada from './pages/Jornada';
import ConsultaDetalhes from './pages/ConsultaDetalhes';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/jornada" element={<Jornada />} />
            <Route path="/consultas/:id" element={<ConsultaDetalhes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
