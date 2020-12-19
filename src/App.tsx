import React, {useEffect, useState} from 'react'
import Carousel from "./Components/Carousel/Carousel";
import './applStyle.scss'
// @ts-ignore
import pic1 from './assets/data/1.jpg'
// @ts-ignore
import pic2 from './assets/data/2.jpg'
// @ts-ignore
import pic3 from './assets/data/3.jpg'
// @ts-ignore
import pic4 from './assets/data/4.jpg'
// @ts-ignore
import pic5 from './assets/data/5.jpg'
// @ts-ignore
import pic6 from './assets/data/6.jpg'
// @ts-ignore
import pic7 from './assets/data/7.jpg'
// @ts-ignore
import pic8 from './assets/data/8.jpg'
// @ts-ignore
import pic9 from './assets/data/9.jpg'
// @ts-ignore
import pic10 from './assets/data/10.jpg'
// @ts-ignore

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height};
}


export type WindowDimensionsType = {
    width: number
    height: number
}

function App() {
    const ArrayPhoto = [
        {urlPicture: pic1, id: 'ncvsbf'},
        {urlPicture: pic2, id: 'gfdgfgsdg'},
        {urlPicture: pic3, id: 'hgdhfgfdg'},
        {urlPicture: pic4, id: 'dfsghdfhndfg'},
        {urlPicture: pic5, id: 'dfasdfdafdas'},
        {urlPicture: pic6, id: 'fasgdfhjydrtd'},
        {urlPicture: pic7, id: 'asdfgshtrsgr'},
        {urlPicture: pic8, id: 'gthyrsjtegf'},
        {urlPicture: pic9, id: 'gdhgshtsgfhdgf'},
        {urlPicture: pic10, id: 'ngfsnbgfsngnf'},
    ]
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensionsType>(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [windowDimensions]);

    return (
        <div className={"mainContainer"}>
            <Carousel WindowDimensions={windowDimensions} ContentData={ArrayPhoto} Paginator={true} Counter={true}/>
        </div>
    )
}


export default App;
