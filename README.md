# react-vanilla-carousel

The slider is designed as a carousel. Responsive. Supports swipes, infinite scrolling and transition to the desired slide. Has pagination and slide counter.

<h1> Installation : </h1>
<u> npm i react-vanilla-carousel </u><br/>
or <br/>
<u>yarn add react-vanilla-carousel </u><br/>

<h1> Usage : </h1>

Use component "Carousel"

It has 4 required parameters: <br/>
Mode - image or jsx mode. Accepts "img" / "jsx". <br/>
ContentData - The data that you will be viewing. Must be [] type of <br/>
```
 [{content: data (img / jsx), id: "unique value"}, {content: data (img / jsx), id: "unique value"}]. 
```
The minimum number of elements in an array is 2. <br/>
Paginator - whether you want to see pagination. Accepts a boolean value. <br/>
Counter - whether you want to see the counter. Accepts a boolean value. <br/>

<h1> Examples</h1> <br/>

    const pic = "https://loremflickr.com/320/240"

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
```
    const ArrayBlocks = [
        {content:<div style={{background:"red",width:"100%",height:"100%"}}/>, id:"1656"},
        {content: <div style={{background:"green",width:"100%",height:"100%"}}/>, id: "264645"},
        {content: <div style={{background:"yellow",width:"100%",height:"100%"}}/>, id: "33543"},
        {content: <div style={{background:"pink",width:"100%",height:"100%"}}/>, id: "46546"},
        {content: <div style={{background:"blue",width:"100%",height:"100%"}}/>, id:"554656"},
    ]


    return (
        <div className={"mainContainer"}>
            <Carousel ContentData={ArrayBlocks} Paginator={true} Counter={true} Mode={"jsx"}/>
        </div>
    )

```
<h1> Contributing : </h1>
Fork it!<br/>
Create your feature branch: git checkout -b my-new-feature<br/>
Commit your changes: git commit -am 'Add some feature'<br/>
Push to the branch: git push origin my-new-feature<br/>
Submit a pull request :D<br/>
