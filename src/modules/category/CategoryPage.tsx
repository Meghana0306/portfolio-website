import * as React from "react";
import CategoryPageItem, { CategoryPageItemData } from "./CategoryPageItem";
import './CategoryPage.css'

export default class CategoryPage extends React.Component<CategoryPageProps, {}> {

    render() {
        const item: CategoryPageItemData = {
            name : "Name is name",
            image: "image itself"
        }
        return (
            <div className="CategoryGrid">
                <CategoryPageItem item={item} index={0}/>
                <CategoryPageItem item={item} index={1}/>
                <CategoryPageItem item={item} index={2}/>
                <CategoryPageItem item={item} index={3}/>
                <CategoryPageItem item={item} index={4}/>
                <CategoryPageItem item={item} index={5}/>
                <CategoryPageItem item={item} index={6}/>
                <CategoryPageItem item={item} index={7}/>
                <CategoryPageItem item={item} index={8}/>
                <CategoryPageItem item={item} index={9}/>
                <CategoryPageItem item={item} index={10}/>
            </div>
        )
    }
}

interface CategoryPageProps {
    
}