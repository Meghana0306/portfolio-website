import * as React from "react";
import CategoryPageItem, { CategoryPageItemData, CategoryPageItemsProps } from "./CategoryPageItem";
import './CategoryPage.css'
import { getImagesForPath } from "../../configs/ImageMapping";

export default class CategoryPage extends React.Component<CategoryPageProps, CategoryPageState> {


    constructor(props: CategoryPageProps) {
        super(props)
        const data: any = this.importAll(props.path)
        this.state = { images: data }
    }

    componentWillReceiveProps(props: CategoryPageProps) {
        const data: any = this.importAll(props.path)
        this.setState({
            images:data
        })
    }

    render() {
        const items = Object.keys(this.state.images).map((item: string) => {
            const data = this.state.images[item]
            const itemProp: CategoryPageItemData = {
                name: data.data.name,
                image: data.url,
                description: data.data.description
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
        return getImagesForPath(path)
    }
}

interface CategoryPageProps {
    path: string
}

interface CategoryPageState {
    images: any
}