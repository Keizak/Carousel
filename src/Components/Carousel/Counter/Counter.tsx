import React from 'react'

type CounterPropsType = {
    startValue: number
    maxValue: number
}

export const Counter = (props: CounterPropsType) => {
    return <div>
        {(props.startValue) + "  of  " + props.maxValue}
    </div>
}
