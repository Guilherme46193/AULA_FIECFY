import PlaylistCard from "./PlaylistCard";


function PlaylistGrid(){
    return(
        <div className="grid grid-cols-2 ig:grid-cols-4 gap-6">
        <PlaylistCard/>
        <PlaylistCard/>
        <PlaylistCard/>
        <PlaylistCard/>


        </div>
   
    )

}

export default PlaylistGrid
