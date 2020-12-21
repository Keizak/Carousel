import React from 'react'
import {Slide} from "./Slide/Slide";
import * as CSS from "csstype";

type SliderPropsType ={
    ContentData : Array<any>
    currentPicture: number
    Mode: "img" | "block"
    styleOfPicture1: CSS.Properties
    styleOfPicture2: CSS.Properties
    styleOfPicture3: CSS.Properties
    styleOfPicture4: CSS.Properties
    styleOfPicture5: CSS.Properties
    setPreviousPicture:(value:number) => void
    setNextPicture:(value:number) => void
}
export const Slider = (props:SliderPropsType) => {
    return <div className={"Slider"}>
        {props.ContentData.map((item, index) => {
            if (index === props.currentPicture) {
                return <div key={item.id}>
                    <Slide action={"1"} index={index} contentData={props.ContentData} styleOfPicture1={props.styleOfPicture1}
                           setPreviousPicture={props.setPreviousPicture} setNextPicture={props.setNextPicture} Mode={props.Mode}/>
                    <Slide action={"2"} index={index} contentData={props.ContentData} styleOfPicture2={props.styleOfPicture2}
                           setPreviousPicture={props.setPreviousPicture} setNextPicture={props.setNextPicture} Mode={props.Mode}/>
                    <Slide action={"3"} index={index} contentData={props.ContentData} styleOfPicture3={props.styleOfPicture3}
                           item={item} setPreviousPicture={props.setPreviousPicture} setNextPicture={props.setNextPicture} Mode={props.Mode}/>
                    <Slide action={"4"} index={index} contentData={props.ContentData} styleOfPicture4={props.styleOfPicture4
                    } setPreviousPicture={props.setPreviousPicture} setNextPicture={props.setNextPicture} Mode={props.Mode}/>
                    <Slide action={"5"} index={index} contentData={props.ContentData} styleOfPicture5={props.styleOfPicture5}
                           setPreviousPicture={props.setPreviousPicture} setNextPicture={props.setNextPicture} Mode={props.Mode}/>
                </div>
            }
        })}
    </div>
}
