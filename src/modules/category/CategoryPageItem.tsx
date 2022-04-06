import * as React from "react";
import './CategoryPage.css'

export default class CategoryCategoryPageItem extends React.Component<CategoryPageItemsProps, CategoryPageItemData> {

    render() {
        return (
            <div className={"CategoryGridItemContainer"}>
                <div className={"CategoryGridItem"}>
                    <img src={this.props.item.image} style={{width: "100%"}}/>
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
    description:string;
}