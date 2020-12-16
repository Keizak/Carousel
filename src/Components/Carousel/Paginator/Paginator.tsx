import React, {useState} from 'react'


type PaginatorPropsType = {
    maxValue: number // length Array of pictures
    setError: (value: boolean) => void
    setStyles: (value: string) => void
    setCurrentPicture: (value: number) => void
}


export const Paginator = (props: PaginatorPropsType) => {

    const [findPicture, setFindPicture] = useState("")

    const findHandler = (value: string) => {
        if (Number(value) > props.maxValue) {
            props.setError(true)
        } else {
            props.setError(false)
            props.setStyles("search")
            setTimeout(() => {
                props.setCurrentPicture(Number(value) - 1)
            }, 1050)
            setTimeout(() => {
                props.setStyles("default")
            }, 1100)
        }

    }
    return <div className={"Paginator"}>
        Go over
        <input value={findPicture}
               type={"number"}
               min={1} max={props.maxValue}
               placeholder={"Enter picture number"}
               onChange={(event) => {
                   setFindPicture(event.currentTarget.value)
               }}/>
        <div onClick={() => {
            findHandler(findPicture)
        }}><a className="buttonGo"><span>go</span></a></div>
    </div>
}
