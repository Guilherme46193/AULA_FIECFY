function CompactCard ({title,imgurl}) {
    return(
        <div className=" flex flex-row items-center font-bold">
            <p>{title}</p>
            <img src={imgurl} className="w-30 h-30 object-cover p-3"/>
        </div>
    )
}
export default CompactCard