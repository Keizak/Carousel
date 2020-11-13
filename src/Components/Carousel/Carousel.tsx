import React, {useState, useEffect, useRef, CSSProperties} from 'react'
import './CarouselStyle.scss'
// @ts-ignore
import pic1 from '../../assets/data/1.jpg'
// @ts-ignore
import pic2 from '../../assets/data/2.jpg'
// @ts-ignore
import pic3 from '../../assets/data/3.jpg'
// @ts-ignore
import pic4 from '../../assets/data/4.jpg'
// @ts-ignore
import pic5 from '../../assets/data/5.jpg'
// @ts-ignore
import pic6 from '../../assets/data/6.jpg'
// @ts-ignore
import pic7 from '../../assets/data/7.jpg'
// @ts-ignore
import pic8 from '../../assets/data/8.jpg'
// @ts-ignore
import pic9 from '../../assets/data/9.jpg'
// @ts-ignore
import pic10 from '../../assets/data/10.jpg'
// @ts-ignore
import * as CSS from 'csstype';
import {WindowDimensionsType} from "../../App";



type CarouselPropsType = {
    WindowDimensions: WindowDimensionsType
}

function Carousel(props: CarouselPropsType) {
    const [currentPicture, setCurrentPicture] = useState(0)
    const [findPicture, setFindPicture] = useState("")
    const [animation, setAnimation] = useState(false)
    const [scroll, setScroll] = useState(1)
    const [error, setError] = useState(false)

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

    let mainPictureDimensions: WindowDimensionsType = {width: 0, height: 0}
    if (props.WindowDimensions.width > 1200) {
        mainPictureDimensions = {width: 40, height: 65}
    } else if (props.WindowDimensions.width > 992 && props.WindowDimensions.width < 1199) {
        mainPictureDimensions = {width: 40, height: 70}
    } else if (props.WindowDimensions.width >= 768 && props.WindowDimensions.width < 991) {
        mainPictureDimensions = {width: 60, height: 70}
    } else if (props.WindowDimensions.width < 767) {
        mainPictureDimensions = {width: 75, height: 65}
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
            case "searchDefault": {
                setStyleOfPicture3({...style3, transform: "translate(-50%,-50%) rotateY(180deg)", transition: "all 1s"})
                setStyleOfPicture2({...style2, transform: "translate(-50%,-50%) rotateY(180deg)", transition: "all 1s"})
                setStyleOfPicture4({...style4, transform: "translate(-50%,-50%) rotateY(180deg)", transition: "all 1s"})
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
                setCurrentPicture(ArrayPhoto.length - 1)
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
        if (currentPicture === ArrayPhoto.length - 1) {
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
    const findHandler = (value: string) => {
        if (Number(value) > ArrayPhoto.length) {
            setError(true)
        } else {
            setError(false)
            setStyles("search")
            setTimeout(() => {
                setCurrentPicture(Number(value) - 1)
            }, 1050)
            setTimeout(() => {
                setStyles("default")
            }, 1100)
        }

    }

    return (
        <div className={"Container"}>
            <div className={"Content"}>
                <div className={"LineArrowLeft"} onClick={animation ? null : () => setPreviousPicture(currentPicture)}/>
                <div className={"Slider"}>
                    {ArrayPhoto.map((item, index) => {
                        if (index === currentPicture) {
                            return <div key={item.id}>
                                {Number(index) === 0 ?
                                    <>
                                        <div style={styleOfPicture1}><img alt={"Image not found"}
                                                                          src={ArrayPhoto[ArrayPhoto.length - 2].urlPicture}/>
                                        </div>
                                    </> :
                                    <>{Number(index) === 1 ? <div style={styleOfPicture1}><img alt={"Image not found"}
                                                                                               src={ArrayPhoto[ArrayPhoto.length - 1].urlPicture}/>
                                        </div> :
                                        <div style={styleOfPicture1}><img alt={"Image not found"}
                                                                          src={ArrayPhoto[Number(index) - 2].urlPicture}/>
                                        </div>
                                    }</>
                                }
                                {Number(index) === 0 ?
                                    <>{scroll >= ArrayPhoto.length ? <div style={styleOfPicture2}>
                                        <img src={ArrayPhoto[ArrayPhoto.length - 1].urlPicture}
                                             onClick={() => {
                                                 setPreviousPicture(ArrayPhoto.length - 1)
                                             }}
                                             alt={"Image not found"}
                                        />
                                    </div> : <></>}</> :
                                    <div style={styleOfPicture2}>
                                        <img src={ArrayPhoto[Number(index) - 1].urlPicture}
                                             onClick={() => {
                                                 setPreviousPicture(index)
                                             }}
                                             alt={"Image not found"}
                                        />
                                    </div>

                                }
                                <div style={styleOfPicture3}>
                                    <img src={item.urlPicture} alt={"Image not found"}/>

                                </div>
                                {ArrayPhoto.map((item, index) => {
                                    if (index === currentPicture) return <div key={item.id}
                                        className={"Input"}>{(index + 1) + "  of  " + ArrayPhoto.length}</div>
                                })}

                                {ArrayPhoto[Number(index) + 1] ?
                                    <div style={styleOfPicture4}>
                                        <img alt={"Image not found"}
                                             onClick={() => {
                                                 setNextPicture(index)
                                             }}
                                             src={ArrayPhoto[Number(index) + 1].urlPicture}/>
                                    </div> :
                                    <div style={styleOfPicture4}><img alt={"Image not found"}
                                                                      onClick={() => {
                                                                          setNextPicture(0)
                                                                      }}
                                                                      src={ArrayPhoto[0].urlPicture}/>
                                    </div>}
                                {ArrayPhoto[Number(index) + 2] ?
                                    <div style={styleOfPicture5}><img alt={"Image not found"}

                                                                      src={ArrayPhoto[Number(index) + 2].urlPicture}/>
                                    </div> : <>{ArrayPhoto[Number(index) +
                                    1] ?
                                        <div style={styleOfPicture5}><img alt={"Image not found"}
                                                                          src={ArrayPhoto[0].urlPicture}/>
                                        </div> : <div style={styleOfPicture5}><img alt={"Image not found"}
                                                                                   src={ArrayPhoto[1].urlPicture}/>
                                        </div>}</>
                                }
                            </div>
                        }
                    })}
                </div>
                <div className={"LineArrowRight"} onClick={animation ? null : () => setNextPicture(currentPicture)}/>
            </div>
            <div className={"Paginator"}>
                Go over
                <input value={findPicture}
                       type={"number"}
                       min={1} max={ArrayPhoto.length}
                       placeholder={"Enter picture number"}
                       onChange={(event) => {
                           setFindPicture(event.currentTarget.value)
                       }}/>
                <div onClick={() => {
                    findHandler(findPicture)
                }}><a className="buttonGo"><span>go</span></a></div>
            </div>
            {error ? <div className={"error"}>Picture not found</div> : <div className={"error"}/>}
        </div>
    )
}


export default Carousel;
