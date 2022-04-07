import * as React from "react";
import './CategoryPage.css'

export default class CategoryCategoryPageItem extends React.Component<CategoryPageItemsProps, CategoryPageItemState> {

    constructor(props: CategoryPageItemsProps) {
        super(props)
        this.state = {
            isFocused: false
        }
    }

    render() {
        return (
            <div className={"CategoryGridItemContainer"} onMouseOver={this.onMouseEnter} onMouseOut={this.onMouseExit}>
                <div className={"CategoryGridItem"}>
                    {
                        this.props.item.image.toString().endsWith(".mp4") ? this.getVideoPlayer()
                            : (
                                <div className={"CategoryImageContainer"}>
                                    <img src={this.props.item.image} className={"CategoryImage"} style={{ width: "100%" }} />
                                </div>
                            )
                    }
                </div>

                <text className={"DescriptionText"}>&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</text>
            </div>
        )
    }

    onMouseEnter = () => {
        this.setState({
            isFocused: true
        })
        const player = (document.getElementById(this.props.item.name)) as HTMLVideoElement
        if (player) player.play()
    }

    onMouseExit = () => {
        this.setState({
            isFocused: false
        })
        const player = (document.getElementById(this.props.item.name)) as HTMLVideoElement
        if (player) player.pause()
    }

    getVideoPlayer = () => {
        return (
            <video id={this.props.item.name} className={"CategoryVideo"} style={{ width: "100%" }} loop muted>
                <source src={this.props.item.image} type="video/mp4" />
            </video>
        )
    }

}

export interface CategoryPageItemsProps {
    index: number;
    item: CategoryPageItemData;
}

export interface CategoryPageItemData {
    name: string;
    image: string;
    description: string;
}

interface CategoryPageItemState {
    isFocused: boolean
}