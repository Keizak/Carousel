import React, {useEffect, useState} from 'react'
import Carousel from "./Components/Carousel/Carousel";
import './applStyle.scss'

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height};
}

export type WindowDimensionsType = {
    width:number
    height:number
}

function App() {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensionsType>(getWindowDimensions());


    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={"mainContainer"}>
            <Carousel WindowDimensions={windowDimensions}/>
        </div>
    )
}


export default App;
