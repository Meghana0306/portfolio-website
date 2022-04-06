import * as React from "react";
import './CategoryPage.css'

const sizes = [200, 300, 500, 400, 550, 350]

export default class CategoryCategoryPageItem extends React.Component<CategoryPageItemsProps, CategoryPageItemData> {

    render() {
        return (
            <div className={"CategoryGridItemContainer"} style={{height: sizes[this.props.index % sizes.length]}}>
                <div className={"CategoryGridItem"}>
                    <text>{`Item ${this.props.index}`}</text>
                </div>
            </div>
        )
    }

}

interface CategoryPageItemsProps {
    index: number;
    item: CategoryPageItemData;
}

export interface CategoryPageItemData {
    name: string;
    image: string;
}