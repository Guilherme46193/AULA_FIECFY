import { useState } from "react"


 function PlaylistCard ({title,description,imgurl}){
      const[
        iscurtiu,Setiscurtiu
      ]=useState(false)

    return(
        <div className=" bg-zinc-900 p-4 rounded-lg hover:bg-zinc-700 hover:scale-105 transition-transform  w-auto h-auto m-5">
            <div className="relative nb-4">
            <img className="h-60 w-60" src={imgurl} alt="Capa do album" />
              <p className="font-bold m-2 mt-3 p-2 ">{title}
                   <p className="text-zinc-500 ">{description}</p>
              </p>
           

            <button className="w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-105 transition-transform">
                <span className=" text-white font-bold">▶︎</span>
            </button>

            <button onClick={()=> Setiscurtiu(!iscurtiu)}
                className="w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-105 transition-transform flex mt-3 text-center justify-center items-center">
                    {iscurtiu ? "❤︎" : "♡︎"}
            </button>

            </div>
        

        </div>
    )
}

export default PlaylistCard


