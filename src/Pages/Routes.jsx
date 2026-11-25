import { useEffect, useState } from 'react';
import Home from './Home.jsx';
import Login from './Login.jsx';

function Routes() {
  const [pagina, setPagina] = useState(window.location.pathname);

  useEffect(() => {
    function atualizarPagina() {
      setPagina(window.location.pathname);
    }

    window.addEventListener('popstate', atualizarPagina);
    return () => window.removeEventListener('popstate', atualizarPagina);
  }, []);

  function irParaHome() {
    window.history.pushState({}, '', '/home');
    setPagina('/home');
  }

  if (pagina === '/home') {
    return (
      <Home />
    );
  }

  return <Login onLogin={irParaHome} />;
}

export default Routes;
