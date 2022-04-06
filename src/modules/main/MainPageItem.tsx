import * as React from "react";
import './MainPage.css'

const colors = ["#EF5350", "#8BC34A", "#42A5F5", "#FFCA28", "#7E57C2"]
// style={{backgroundImage:`url(${this.props.item.image})`}}
export default class MainPageItem extends React.Component<MainPageItemProps, {}> {

    render() {
        return (
            <div className="MainGridItemNonRelative">
            <div className={"MainGridItemContainer"} style={{backgroundColor: `${colors[this.props.index]}`}}>
                <div style={{width: "100%", height: "100%", position: "relative"}}>
                <div className={"MainGridItem"}>
                    <text className={"MainGridItemTitle"}>{this.props.item.name}</text>
                    <div className={"MainGridItemOverlay"}/>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export interface MainPageItemProps {
    item: MainPageItemData;
    index: number;
}

export interface MainPageItemData {
    name: string;
}