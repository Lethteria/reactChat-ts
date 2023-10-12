import React from "react";
interface IIcon {
    viewBox: string;
    width: string;
    height: string;
    body: React.ReactElement
}

export interface IIcons {
    [propName: string]: IIcon
}