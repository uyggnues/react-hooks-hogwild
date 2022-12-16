// import hogs from "../porkers_data";
import {useState} from "react"

    const Hog = ({name, specialty, greased, weight, image}) => {
    // debugger

        const [info, setInfo] = useState(false)

        const handleClick = () => {
            // console.log("clicked")
            setInfo(currentInfos => !currentInfos)

        }
        

    return(
        <div className="pigTile" onClick={handleClick}>
            <ul className="maxPigTile">
                <h3>{name}</h3>
                    <img className="minPigTile" src={image} alt={name} />
                    {info ? <div className="smallHeader">
                    <ul>specialty:{specialty}</ul>
                    <ul>greased:{greased}</ul>
                    <ul>weight:{weight}</ul>
                    </div> : null}
            </ul>
        </div>
    )
}
export default Hog;