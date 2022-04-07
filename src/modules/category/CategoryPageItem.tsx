import * as React from "react";
import './CategoryPage.css'

export default class CategoryCategoryPageItem extends React.Component<CategoryPageItemsProps, CategoryPageItemData> {

    constructor(props: CategoryPageItemsProps) {
        super(props)
    }

    render() {
        console.log("TestTest", this.props.item.image.toString().endsWith(".mp4"))
        console.log(this.props.item.image)
        return (
            <div className={"CategoryGridItemContainer"}>
                <div className={"CategoryGridItem"}>
                    {
                        this.props.item.image.toString().endsWith(".mp4") ?
                            (<video className={"CategoryImage"} style={{ width: "100%" }} autoPlay muted> 
                            <source src={this.props.item.image} type="video/mp4"/>
                            </video>)
                            : (<img src={this.props.item.image} className={"CategoryImage"} style={{ width: "100%" }} />)
                    }


                </div>
            </div>
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