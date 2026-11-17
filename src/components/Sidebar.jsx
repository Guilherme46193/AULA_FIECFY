import { useState } from 'react';
import { PlaylistBiblioteca } from '../data/mockapi';

function HomeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" /></svg>;
}

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-[2.2]"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></svg>;
}

function LibraryIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current stroke-[2]"><path d="M4 4v16M9 4v16M14 4v16M19 4v16" /></svg>;
}

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside className="m-2 mr-0 flex w-64 shrink-0 flex-col gap-2 overflow-hidden rounded-xl bg-[#101010] p-2 text-white max-md:w-20 max-md:items-center max-md:px-2">
      <nav aria-label="Navegação principal" className="flex flex-col gap-1 rounded-lg bg-[#181818] p-2">
        <a href="#inicio" aria-current="page" className="group flex items-center gap-4 rounded-md px-3 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 max-md:justify-center max-md:px-2">
          <span className="text-white"><HomeIcon /></span><span className="max-md:hidden">Início</span>
        </a>
        <a href="#buscar" className="group flex items-center gap-4 rounded-md px-3 py-3 text-sm font-semibold text-zinc-400 transition-colors hover:text-white max-md:justify-center max-md:px-2">
          <span><SearchIcon /></span><span className="max-md:hidden">Buscar</span>
        </a>
      </nav>

      <section aria-label="Sua biblioteca" className="flex min-h-0 flex-1 flex-col rounded-lg bg-[#181818]">
        <div className="flex items-center justify-between px-4 py-4 max-md:justify-center max-md:px-2">
          <button type="button" aria-expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-3 text-sm font-semibold text-zinc-400 transition-colors hover:text-white max-md:justify-center" aria-label="Mostrar ou ocultar biblioteca">
            <span><LibraryIcon /></span><span className="max-md:hidden">Sua biblioteca</span>
          </button>
          <button type="button" onClick={() => setIsExpanded(!isExpanded)} aria-label={isExpanded ? 'Recolher biblioteca' : 'Expandir biblioteca'} className="rounded-full px-2 py-1 text-xl leading-none text-zinc-400 transition hover:bg-white/10 hover:text-white max-md:hidden">{isExpanded ? '−' : '+'}</button>
        </div>

        {isExpanded && <>
          <div className="mx-3 mb-3 rounded-lg bg-[#242424] p-4 max-md:hidden">
            <p className="text-sm font-semibold">Crie sua coleção</p>
            <p className="mt-1 text-xs text-zinc-400">Seus álbuns favoritos, sempre por perto.</p>
            <button type="button" className="mt-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-black transition hover:scale-105">Explorar músicas</button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-3">
            <p className="px-2 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500 max-md:hidden">Recentes</p>
            <ul className="space-y-1">
              {PlaylistBiblioteca.map((item) => (
                <li key={item.id}>
                  <a href={`#album-${item.id}`} title={`${item.title} — ${item.description}`} className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-white/10">
                    <img src={item.imgurl} alt="" className="h-11 w-11 shrink-0 rounded object-cover shadow-md" />
                    <span className="min-w-0 max-md:hidden"><span className="block truncate text-sm font-medium text-zinc-100">{item.title}</span><span className="mt-1 block truncate text-xs text-zinc-400">{item.description}</span></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>}
      </section>
    </aside>
  );
}

export default Sidebar;
