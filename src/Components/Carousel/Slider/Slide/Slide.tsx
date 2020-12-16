import React, {useState} from "react";
import * as CSS from "csstype";



type SlidePropsType = {
    action:string
    index:number
    contentData:Array<any>
    item?:any
    styleOfPicture1?: CSS.Properties
    styleOfPicture2?: CSS.Properties
    styleOfPicture3?: CSS.Properties
    styleOfPicture4?: CSS.Properties
    styleOfPicture5?: CSS.Properties
    setPreviousPicture?:(value:number) => void
    setNextPicture?:(value:number) => void

}
export const Slide = (props:SlidePropsType) => {
    const [touchStart, setTouchStart] = useState(0)
    switch (props.action){
        case '1' : {
            return <div>
                {Number(props.index) === 0 ?
                    <>
                        <div style={props.styleOfPicture1}><img alt={"Image not found"}
                                                          src={props.contentData[props.contentData.length - 2].urlPicture}/>
                        </div>
                    </> :
                    <>{Number(props.index) === 1 ? <div style={props.styleOfPicture1}><img alt={"Image not found"}
                                                                               src={props.contentData[props.contentData.length - 1].urlPicture}/>
                        </div> :
                        <div style={props.styleOfPicture1}><img alt={"Image not found"}
                                                          src={props.contentData[Number(props.index) - 2].urlPicture}/>
                        </div>
                    }</>
                }
            </div>
        }
        case '2' : {
            return <div>
                {Number(props.index) === 0 ? <div style={props.styleOfPicture2}>
                        <img src={props.contentData[props.contentData.length - 1].urlPicture}
                             onClick={() => {
                                 props.setPreviousPicture(props.contentData.length)
                             }}
                             alt={"Image not found"}
                        />
                    </div> :
                    <div style={props.styleOfPicture2}>
                        <img src={props.contentData[Number(props.index) - 1].urlPicture}
                             onClick={() => {
                                 props.setPreviousPicture(props.index)
                             }}
                             alt={"Image not found"}
                        />
                    </div>

                }
            </div>
        }
        case '3' : {
            return <div style={props.styleOfPicture3}
                        onTouchStart={touchStartEvent => setTouchStart(touchStartEvent.changedTouches[0].clientX)}
                        onTouchMove={touchMoveEvent => {
                            if (touchMoveEvent.changedTouches[0].clientX < touchStart - 100) props.setNextPicture(props.index)
                            if (touchMoveEvent.changedTouches[0].clientX > touchStart + 100) {
                                Number(props.index) === 0 ? props.setPreviousPicture(props.contentData.length) : props.setPreviousPicture(props.index)
                            }
                        }}>
                <img src={props.item.urlPicture} alt={"Image not found"}/>.
            </div>
        }
        case '4' : {
            return <div>
                {props.contentData[Number(props.index) + 1] ?
                    <div style={props.styleOfPicture4}>
                        <img alt={"Image not found"}
                             onClick={() => {
                                 props.setNextPicture(props.index)
                             }}
                             src={props.contentData[Number(props.index) + 1].urlPicture}/>
                    </div> :
                    <div style={props.styleOfPicture4}><img alt={"Image not found"}
                                                      onClick={() => {
                                                          props.setNextPicture(-1)
                                                      }}
                                                      src={props.contentData[0].urlPicture}/>
                    </div>}
            </div>
        }
        case '5' : {
            return <div>
                {props.contentData[Number(props.index) + 2] ?
                    <div style={props.styleOfPicture5}><img alt={"Image not found"}

                                                      src={props.contentData[Number(props.index) + 2].urlPicture}/>
                    </div> : <>{props.contentData[Number(props.index) +
                    1] ?
                        <div style={props.styleOfPicture5}><img alt={"Image not found"}
                                                          src={props.contentData[0].urlPicture}/>
                        </div> : <div style={props.styleOfPicture5}><img alt={"Image not found"}
                                                                   src={props.contentData[1].urlPicture}/>
                        </div>}</>
                }
            </div>
        }
    }
}
