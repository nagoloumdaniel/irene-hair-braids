import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import List from './pages/List';
import Spinner from './composants/Spinner';
import Error from './pages/Errorpage';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement de page
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Délai de 2 secondes pour simuler le chargement

    return () => clearTimeout(timer); // Nettoyer le timer lors du démontage
  }, []);

  return (
    <Router>
      <div>
        {loading ? (  
          <Spinner /> // Affiche le spinner pendant le chargement
        ) : (
          <div>
            {/* Contenu de la page ici */}
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="*" element={<Error />} /> {/* Route catch-all pour les pages non trouvées */}
              </Routes>
            </main>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
