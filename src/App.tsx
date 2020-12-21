import React from 'react'
import Carousel from "./Components/Carousel/Carousel";
import './applStyle.scss'



function App() {

    const pic = "https://loremflickr.com/320/240"

    const ArrayBlocks = [
        {content:<div style={{background:"red",width:"100%",height:"100%"}}/>, id:"1656"},
        {content: <div style={{background:"green",width:"100%",height:"100%"}}/>, id: "264645"},
        {content: <div style={{background:"yellow",width:"100%",height:"100%"}}/>, id: "33543"},
        {content: <div style={{background:"pink",width:"100%",height:"100%"}}/>, id: "46546"},
        {content: <div style={{background:"blue",width:"100%",height:"100%"}}/>, id:"554656"},
    ]
    const ArrayPhoto = [
        {content:pic, id:"135465"},
        {content:pic, id: "23456"},
        {content:pic, id: "36536"},
        {content:pic, id: "42543"},
        {content:pic, id:"56536245"},
    ]

    return (
        <div className={"mainContainer"}>
            <Carousel ContentData={ArrayPhoto} Paginator={true} Counter={true} Mode={"img"}/>
        </div>
    )
}


export default App;
