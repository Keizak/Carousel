import React, {useEffect, useState} from 'react'
import * as CSS from 'csstype';
import './CarouselStyle.scss'
import {Paginator} from "./Paginator/Paginator";
import {Counter} from "./Counter/Counter";
import {Slider} from "./Slider/Slider";

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height};
}

type CarouselPropsType = {
    ContentData: Array<ContentDataType>
    Paginator: boolean
    Counter: boolean
    Mode: "img" | "block"
}
type WindowDimensionsType = {
    width: number
    height: number
}
type ContentDataType = {
    content: any // img or jsx
    id: string
}

export function Carousel(props: CarouselPropsType) {

    /// resize function

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

    ///

    const [currentPicture, setCurrentPicture] = useState(0)
    const [animation, setAnimation] = useState(false)
    const [scroll, setScroll] = useState(1)
    const [error, setError] = useState(false)

    let mainPictureDimensions: WindowDimensionsType = {width: 0, height: 0}

    if (windowDimensions.width > 1200) {
        mainPictureDimensions = {width: 40, height: 65}
    } else if (windowDimensions.width > 992 && windowDimensions.width < 1199) {
        mainPictureDimensions = {width: 40, height: 70}
    } else if (windowDimensions.width >= 768 && windowDimensions.width < 991) {
        mainPictureDimensions = {width: 60, height: 70}
    } else if (windowDimensions.width < 767) {
        mainPictureDimensions = {width: 75, height: 65}
    }
    if (windowDimensions.height < 400) {
        mainPictureDimensions = {width: 35, height: 65}
    } else if (windowDimensions.height < 500) {
        mainPictureDimensions = {width: 40, height: 65}
    }

    const templateStyle: CSS.Properties = {
        position: "absolute",
        top: "50%",
        left: "-15%",
        transform: "translate(-50%,-50%) rotateY(180deg)",
        height: "50%",
        width: "25%",
        transition: "all 0.4s",
        borderRadius: "5%",
        overflow: "hidden",
        boxShadow: "0px 0 10px gray",
        zIndex: 0,
    }
    const style1: CSS.Properties = {...templateStyle}
    const style2: CSS.Properties = {...templateStyle, left: "15%"}
    const style3: CSS.Properties = {
        ...templateStyle,
        left: "50%",
        width: `${mainPictureDimensions.width}%`,
        height: `${mainPictureDimensions.height}%`,
        boxShadow: "0px 0 20px gray",
        zIndex: 1
    }
    const style4: CSS.Properties = {...templateStyle, left: "85%"}
    const style5: CSS.Properties = {...templateStyle, left: "115%"}

    let [styleOfPicture1, setStyleOfPicture1] = useState<CSS.Properties>(style1)
    let [styleOfPicture2, setStyleOfPicture2] = useState<CSS.Properties>(style2)
    let [styleOfPicture3, setStyleOfPicture3] = useState<CSS.Properties>(style3)
    let [styleOfPicture4, setStyleOfPicture4] = useState<CSS.Properties>(style4)
    let [styleOfPicture5, setStyleOfPicture5] = useState<CSS.Properties>(style5)

    useEffect(() => {
        if (styleOfPicture3.width !== style3.width || styleOfPicture3.height !== style3.height) {
            setStyleOfPicture3(style3)
        }
    }, [windowDimensions])

    const setStyles = (type: "default" | "next" | "previous" | "search" | "searchDefault") => {
        switch (type) {
            case "default" : {
                setStyleOfPicture1(style1)
                setStyleOfPicture2(style2)
                setStyleOfPicture3(style3)
                setStyleOfPicture4(style4)
                setStyleOfPicture5(style5)
                return
            }
            case "next" : {
                setStyleOfPicture2(style1)
                setStyleOfPicture3(style2)
                setStyleOfPicture4(style3)
                setStyleOfPicture5(style4)
                return
            }
            case "previous": {
                setStyleOfPicture1(style2)
                setStyleOfPicture2(style3)
                setStyleOfPicture3(style4)
                setStyleOfPicture4(style5)
                return
            }
            case "search": {
                setStyleOfPicture3({...style3, transform: "translate(-50%,-50%) rotateY(90deg)", transition: "all 1s"})
                setStyleOfPicture2({...style2, transform: "translate(-50%,-50%) rotateY(90deg)", transition: "all 1s"})
                setStyleOfPicture4({...style4, transform: "translate(-50%,-50%) rotateY(90deg)", transition: "all 1s"})
                return
            }
        }


    }
    const setPreviousPicture = (currentPicture: number) => {
        setError(false)
        setScroll(scroll + 1)
        setAnimation(true)
        setStyles("previous")
        if (currentPicture === 0) {
            setTimeout(() => {
                setCurrentPicture(props.ContentData.length - 1)
                setStyles("default")
                setAnimation(false)
            }, 500)
        } else {
            setTimeout(() => {
                setCurrentPicture(currentPicture - 1)
                setStyles("default")
                setAnimation(false)
            }, 500)
        }
    }
    const setNextPicture = (currentPicture: number) => {
        setError(false)
        setAnimation(true)
        setScroll(scroll + 1)
        setStyles("next")
        if (currentPicture === props.ContentData.length - 1) {
            setTimeout(() => {
                setCurrentPicture(0)
                setStyles("default")
                setAnimation(false)
            }, 500)
        } else {
            setTimeout(() => {
                setCurrentPicture(currentPicture + 1)
                setStyles("default")
                setAnimation(false)
            }, 500)
        }
    }

    return (
        <div className={"Container"}>
            <div className={"Content"}>
                <div className={"LineArrowLeft"} onClick={animation ? null : () => setPreviousPicture(currentPicture)}/>
                <Slider ContentData={props.ContentData} currentPicture={currentPicture}
                        styleOfPicture1={styleOfPicture1} styleOfPicture2={styleOfPicture2}
                        styleOfPicture3={styleOfPicture3}
                        styleOfPicture4={styleOfPicture4} styleOfPicture5={styleOfPicture5}
                        setPreviousPicture={setPreviousPicture} setNextPicture={setNextPicture} Mode={props.Mode}/>
                <div className={"LineArrowRight"} onClick={animation ? null : () => setNextPicture(currentPicture)}/>
            </div>
            {props.Counter ? <Counter startValue={currentPicture + 1} maxValue={props.ContentData.length}/> : null}
            {props.Paginator ? <Paginator maxValue={props.ContentData.length} setCurrentPicture={setCurrentPicture} setError={setError}
                                          setStyles={setStyles}/> : null}

            {error ? <div className={"error"}>Picture not found</div> : <div className={"error"}/>}
        </div>
    )
}


export default Carousel;
