function Toast({ message, type = 'success', onClose }) {
  const color = type === 'error' ? 'border-red-400' : 'border-green-400';

  return (
    <div role="status" className={`fixed right-5 top-5 z-50 flex items-center gap-4 rounded-lg border-l-4 ${color} bg-zinc-800 px-5 py-4 text-sm text-white shadow-xl`}>
      <span>{message}</span>
      <button type="button" onClick={onClose} aria-label="Fechar aviso" className="text-zinc-400 hover:text-white">×</button>
    </div>
  );
}

export default Toast;
