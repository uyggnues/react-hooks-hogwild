// import hogs from "../porkers_data";
    const Hogs = ({name, specialty, greased, weight, image}) => {
    // debugger


    return(
        <div className="minPigTile">
            <ul className="pigTile">
            <span>{name}</span>
            <img src={image} alt={name}></img>
            </ul>
        </div>
    )
}
export default Hogs;