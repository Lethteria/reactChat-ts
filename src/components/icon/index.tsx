import React from "react";
import {iconsDefs} from "../../assets/icons";

type IconProps = {
    iconType: string,
    className?: string
}

export default function Icon(props: IconProps){
    const {viewBox, width, height, body} =  iconsDefs[props.iconType]

    return (
        <svg viewBox={viewBox}
             width={width}
             height={height}
             className={props.className}>
            {body}
        </svg>
    )
}