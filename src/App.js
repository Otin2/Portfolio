import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Context Providers
import { ThemeProvider } from './Context/Theme';
import { LanguageProvider } from './Context/Language';

// Pages
import Home from './Pages/Home';
import CV from './Pages/CV';

function App() {
  useEffect(() => {
    // Agregar Bootstrap CSS
    const bootstrapCSS = document.createElement('link');
    bootstrapCSS.rel = 'stylesheet';
    bootstrapCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCSS);

    // Agregar Font Awesome
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);

    // Agregar Bootstrap JS
    const bootstrapJS = document.createElement('script');
    bootstrapJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js';
    document.body.appendChild(bootstrapJS);

    return () => {
      if (document.head.contains(bootstrapCSS)) {
        document.head.removeChild(bootstrapCSS);
      }
      if (document.head.contains(fontAwesome)) {
        document.head.removeChild(fontAwesome);
      }
      if (document.body.contains(bootstrapJS)) {
        document.body.removeChild(bootstrapJS);
      }
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;