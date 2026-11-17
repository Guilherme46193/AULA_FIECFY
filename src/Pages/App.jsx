import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import Header from '../components/Header';
import PlaylistCard from '../components/PlaylistCard';


// Importando a nossa "falsa API"
import { playlistData } from '../data/mockData';

function App() {
  return (
    <>
      <div className="h-screen bg-black text-white flex flex-col">
        {/* Os componentes serão chamados abaixo */}
        <div className='flex flex-1 overflow-hidden'>
           <Sidebar />

            <main className='flex-1 bg-zinc-900 rounded-lg m-2 p-6 overflow-y-auto'>
              <Header />
              <h2 className='text-2xl font-bold mb-6'>Boa tarde!</h2>
              <div className="h-[800]">
                <p className='text-zinc-400'>Seus álbuns serão exibidos aqui! ♫</p>

                  <div className='flex flex-wrap gap-6'>
         { playlistData.map(item=>
          <PlaylistCard
          key={item.id}
          description={item.description}
          title={item.description}
          imgurl={item.imgurl}/>
         )}



               
               

                  </div>
              
              </div>
            </main>

        </div>


      <Player />
      </div>
    </>
  )
}

export default App;
