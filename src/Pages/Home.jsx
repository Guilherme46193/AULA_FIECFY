import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import Header from '../components/Header';
import PlaylistCard from '../components/PlaylistCard';


// Importando a nossa "falsa API"
import { playlistData } from '../data/mockData';

function Home() {
  return (
    <>
      <div className="h-screen bg-black text-white flex flex-col">
        {/* Os componentes serão chamados abaixo */}
        <div className='flex flex-1 overflow-hidden'>
           <Sidebar />

            <main className='flex-1 bg-[radial-gradient(ellipse_at_top,_#0B3B78_0%,_#061A35_40%,_#020B18_75%,_#000000_100%)] rounded-lg m-2 p-6 overflow-y-auto'>
              <Header />
              <h2 className='text-2xl font-bold mb-6'>Boa tarde!</h2>
              <div className="h-">
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

export default Home;
