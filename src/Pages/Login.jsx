import { useState } from 'react';
import Toast from '../components/Toast';
import fundoTravis from '../assets/fundotravis.png';
import { FaEye, FaEyeSlash } from "react-icons/fa6";

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [toast, setToast] = useState(null);
  

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !senha.trim()) {
      setToast({ message: 'Preencha seu e-mail e sua senha.', type: 'error' });
      return;
    }

    onLogin();
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-10 text-white">
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      <img
        src={fundoTravis}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
      <section className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900/90 p-8 shadow-2xl backdrop-blur-sm sm:p-10">
        <a href="/" className="mb-10 inline-flex items-center gap-2 text-2xl font-bold tracking-tight">
          <span className="text-3xl text-blue-500">♫</span> fiecfy
        </a>
        <h1 className="text-3xl font-bold">Bem-vindo de volta</h1>
        <p className="mt-2 text-sm text-zinc-400">Entre na sua conta e curta suas músicas.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block text-sm font-semibold" >
            E-mail
            <input id="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Seuemail@email.com" className="mt-2 w-full rounded-lg border border-zinc-600 bg-transparent px-4 py-3 font-normal outline-none transition focus:border-blue-500" />
          </label>
          <label className="block text-sm font-semibold">
            Senha
            <span className="relative mt-2 block">
              <input id="password" type={mostrarSenha ? 'text' : 'password'} autoComplete="current-password" value={senha} onChange={(event) => setSenha(event.target.value)} placeholder="Sua senha" className="w-full rounded-lg border border-zinc-600 bg-transparent px-4 py-3 pr-12 font-normal outline-none transition focus:border-blue-500" />
              <button
                type="button"
                onClick={() => setMostrarSenha((visivel) => !visivel)}
                aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                aria-pressed={mostrarSenha}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400 hover:text-white"
              >
                {mostrarSenha ? <FaEyeSlash aria-hidden="true" /> : <FaEye aria-hidden="true" />}
              </button>
            </span>
          </label>
          <button type="submit" className="w-full rounded-full bg-blue-500 py-3 font-bold text-black transition hover:scale-[1.02] hover:bg-blue-500">Entrar</button>
        </form>

        <p className="mt-8 text-center text-sm text-zinc-400">Ainda não tem conta? <button type="button" onClick={() => setToast({ message: 'Cadastro estará disponível em breve.', type: 'success' })} className="font-semibold text-white underline underline-offset-4 hover:text-blue-400">Inscreva-se</button></p>
      </section>
    </main>
  );
}

export default Login;
