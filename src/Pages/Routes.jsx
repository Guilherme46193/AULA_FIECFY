import { useEffect, useState } from 'react';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Toast from '../components/Toast.jsx';

function Routes() {
  const [pagina, setPagina] = useState(window.location.pathname);
  const [aviso, setAviso] = useState('');

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
    setAviso('Login realizado com sucesso!');
  }

  if (pagina === '/home') {
    return (
      <>
        {aviso && <Toast message={aviso} onClose={() => setAviso('')} />}
        <Home />
      </>
    );
  }

  return <Login onLogin={irParaHome} />;
}

export default Routes;
