import * as React from "react";
import CategoryPageItem, { CategoryPageItemData, CategoryPageItemsProps } from "./CategoryPageItem";
import './CategoryPage.css'

export default class CategoryPage extends React.Component<CategoryPageProps, CategoryPageState> {


    constructor(props: CategoryPageProps) {
        super(props)
        const data: any = this.importAll(props.path)
        this.state = { images: data }
    }

    render() {
        console.log("TestTest", this.state)
        const items = Object.keys(this.state.images).map((item: string) => {
            const itemProp: CategoryPageItemData = {
                name: item,
                image: (this.state.images[item]).toString(),
                description: ""
            }
            return <CategoryPageItem index={1} item={itemProp} />
        })


        return (
            <div className="CategoryGrid">
                {items}
            </div>
        )
    }

    importAll = (path: string): any => {
        const resource = require.context('../../assets/arts', false, /\.(webp|png|jpe?g|svg)$/)
        let images: any = {};
        resource.keys().map((item: any, _: any) => {
            images[item.replace('./', '')] = resource(item);
        });
        return images;
    }
}

interface CategoryPageProps {
    path: string
}

interface CategoryPageState {
    images: any
}